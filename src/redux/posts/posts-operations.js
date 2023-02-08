import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPostsByCountry } from 'components/services/api-posts';

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
