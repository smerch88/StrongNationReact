import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addNewRegion,
  getAllRegions,
  getRegionById,
  getRegionByName,
  regions,
} from 'services/api';

export const fetchRegions = createAsyncThunk(
  // gets all regions
  'regions/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getAllRegions();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchRegionById = createAsyncThunk(
  // get a region by its id
  'regions/getRegionById',
  async (id, thunkAPI) => {
    try {
      const response = await getRegionById(id);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchRegionByName = createAsyncThunk(
  // get a region by its name
  'regions/getRegionByName',
  async (region, thunkAPI) => {
    try {
      const response = await getRegionByName(region);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addRegion = createAsyncThunk(
  // adds a region by its name
  'regions/addRegion',
  async (region, thunkAPI) => {
    try {
      const response = await addNewRegion(region);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeRegion = createAsyncThunk(
  'regions/removeRegion',
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
  'regions/addCountry',
  async (data, thunkAPI) => {
    try {
      const response = await regions.post('', { ...data });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
