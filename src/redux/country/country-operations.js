import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCountry } from 'services/api-country';

export const fetchCountry = createAsyncThunk(
  'country/fetchCountry',
  async (_, thunkAPI) => {
    try {
      const res = await getCountry();
      // if (res.status !== 200) {
      //   throw new Error(`Failed to fetch: ${res.status}`);
      // }
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
