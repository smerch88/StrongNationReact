import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNewRegion, getAllRegions, regions } from 'components/services/api';

export const fetchRegions = createAsyncThunk(
  // gets all regions
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getAllRegions();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addRegion = createAsyncThunk(
  // adds a region by its name
  'contacts/addRegion',
  async (region, thunkAPI) => {
    try {
      const response = await addNewRegion(region);
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
