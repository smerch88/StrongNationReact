import { createAsyncThunk } from '@reduxjs/toolkit';
import { regions } from 'components/services/api';

export const fetchRegions = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await regions.get('');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addRegion = createAsyncThunk(
  'contacts/addRegion',
  async (data, thunkAPI) => {
    try {
      const response = await regions.post('', { ...data });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeRegion = createAsyncThunk(
  'contacts/removeRegion',
  async (userId, thunkAPI) => {
    try {
      const response = await regions.delete(`${userId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addCountry = createAsyncThunk(
  'contacts/addCountry',
  async (data, thunkAPI) => {
    try {
      const response = await regions.post('', { ...data });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
