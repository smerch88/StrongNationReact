import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteSliderImage,
  getAllSliderId,
  uploadSliderImage,
} from 'services/api-slider';

export const fetchAllSliderId = createAsyncThunk(
  'slider/fetchAllSliderId',
  async (_, thunkAPI) => {
    try {
      const res = await getAllSliderId();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeSliderImage = createAsyncThunk(
  'slider/deleteSliderImage',
  async (id, thunkAPI) => {
    try {
      const res = await deleteSliderImage(id);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const uploadSImage = createAsyncThunk(
  'slider/uploadSImage',
  async (body, thunkAPI) => {
    try {
      const res = await uploadSliderImage(body);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
