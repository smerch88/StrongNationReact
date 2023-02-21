import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCountry } from 'services/api-country';

export const fetchCountry = createAsyncThunk(
  'country/fetchCountry',
  async (_, thunkAPI) => {
    try {
      const res = await getCountry();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
