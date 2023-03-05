import { Notify } from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { logOutAdminRequest } from 'redux/admin/admin-operations';
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
      // if (res.status !== 200) {
      //   throw new Error(`Failed to fetch: ${res.status}`);
      // }
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeSliderImage = createAsyncThunk(
  'slider/deleteSliderImage',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const res = await deleteSliderImage(id);
      if (res.response.data.debugMessage.startsWith('Token is not valid.')) {
        dispatch(logOutAdminRequest());
      }
      Notify.info('Зроблено!');
      // if (res.status !== 200) {
      //   throw new Error(`Failed to fetch: ${res.status}`);
      // }
      return res;
    } catch (error) {
      Notify.failure(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const uploadSImage = createAsyncThunk(
  'slider/uploadSImage',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const res = await uploadSliderImage(body);
      if (res.response.data.debugMessage.startsWith('Token is not valid.')) {
        dispatch(logOutAdminRequest());
      }
      Notify.info('Зроблено!');
      // if (res.status !== 200) {
      //   throw new Error(`Failed to fetch: ${res.status}`);
      // }
      return res;
    } catch (error) {
      Notify.failure(error.message);
      return rejectWithValue(error.message);
    }
  }
);
