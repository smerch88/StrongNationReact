import { omit } from 'lodash';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { logOutAdminRequest } from 'redux/admin/admin-operations';
import {
  getAllPostsByCountry,
  addPostByNameOfRegion,
  deletePostById,
  updatePostById,
  addImportant,
  deleteImportant,
  addPhotoForPost,
} from 'services/api-posts';

export const fetchAllPostsByCountry = createAsyncThunk(
  'posts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await getAllPostsByCountry();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addPost = createAsyncThunk(
  'posts/addPost',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const res = await addPostByNameOfRegion(
        body.region,
        omit(body, 'region', 'formData')
      );
      await addPhotoForPost(res.id, body.formData);
      if (res.response.data.debugMessage.startsWith('Token is not valid.')) {
        dispatch(logOutAdminRequest());
      }
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const res = await deletePostById(id);
      if (res.response.data.debugMessage.startsWith('Token is not valid.')) {
        dispatch(logOutAdminRequest());
      }
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const res = await updatePostById(body);
      await addPhotoForPost(res.id, body.formData);
      if (res.response.data.debugMessage.startsWith('Token is not valid.')) {
        dispatch(logOutAdminRequest());
      }
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addPostToImportant = createAsyncThunk(
  'posts/addImportant',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const res = await addImportant(id);
      if (res.response.data.debugMessage.startsWith('Token is not valid.')) {
        dispatch(logOutAdminRequest());
      }
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePostFromImportant = createAsyncThunk(
  'posts/removeImportant',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const res = await deleteImportant(id);
      if (res.response.data.debugMessage.startsWith('Token is not valid.')) {
        dispatch(logOutAdminRequest());
      }
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
