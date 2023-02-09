import { createSlice } from '@reduxjs/toolkit';
import { fetchCountry } from './country-operations';

const countrySlice = createSlice({
  name: 'country',
  initialState: {
    country: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCountry.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCountry.fulfilled, (state, action) => {
        state.isLoading = true;
        state.error = false;
        state.country = action.payload;
      })
      .addCase(fetchCountry.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const countryReducer = countrySlice.reducer;
