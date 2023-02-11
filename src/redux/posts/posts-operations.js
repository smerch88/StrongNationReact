import { createAsyncThunk } from '@reduxjs/toolkit';
import { omit } from 'lodash';
import {
  getAllPostsByCountry,
  addPostByNameOfRegion,
  getPhotoForPost,
} from 'components/services/api-posts';

import { addPhotoForPost } from 'components/services/api-posts';

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
        omit(body, 'region', 'formData')
      );
      await addPhotoForPost(res.id, body.formData);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getPostPicture = createAsyncThunk(
//   'posts/getPicture',
//   async (postId, thunkAPI) => {
//     try {
//       const res = await getPhotoForPost(postId);
//       return res;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
