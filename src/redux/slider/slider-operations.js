import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
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
      Notify.info('Зроблено!');
      return res;
    } catch (error) {
      Notify.failure(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const uploadSImage = createAsyncThunk(
  'slider/uploadSImage',
  async (body, thunkAPI) => {
    try {
      const res = await uploadSliderImage(body);
      Notify.info('Зроблено!');
      return res;
    } catch (error) {
      Notify.failure(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
