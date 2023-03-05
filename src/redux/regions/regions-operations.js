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
      const res = await getAllRegions();
      // if (res.status !== 200) {
      //   throw new Error(`Failed to fetch: ${res.status}`);
      // }
      return res;
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
      const res = await getRegionById(id);
      // if (res.status !== 200) {
      //   throw new Error(`Failed to fetch: ${res.status}`);
      // }
      return res;
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
      const res = await getRegionByName(region);
      // if (res.status !== 200) {
      //   throw new Error(`Failed to fetch: ${res.status}`);
      // }
      return res;
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
      const res = await addNewRegion(region);
      // if (res.status !== 200) {
      //   throw new Error(`Failed to fetch: ${res.status}`);
      // }
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeRegion = createAsyncThunk(
  'regions/removeRegion',
  async (userId, thunkAPI) => {
    try {
      const res = await regions.delete(`${userId}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addCountry = createAsyncThunk(
  'regions/addCountry',
  async (data, thunkAPI) => {
    try {
      const res = await regions.post('', { ...data });
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
