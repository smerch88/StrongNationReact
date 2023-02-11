import { createAsyncThunk } from '@reduxjs/toolkit';
import { omit } from 'lodash';
import {
  getAllPostsByCountry,
  addPostByNameOfRegion,
} from 'components/services/api-posts';

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
  async (body, thunkAPI) => {
    try {
      const res = await addPostByNameOfRegion(
        body.region,
        omit(body, 'region')
      );
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
