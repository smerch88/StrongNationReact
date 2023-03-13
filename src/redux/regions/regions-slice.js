import { createSlice } from '@reduxjs/toolkit';

import {
  addRegion,
  fetchRegions,
  removeRegion,
} from 'redux/regions/regions-operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  regions: [],
  isLoading: false,
  error: null,
};

const regionsSlice = createSlice({
  name: 'regions',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchRegions.pending, handlePending)
      .addCase(fetchRegions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.regions = action.payload;
      })
      .addCase(fetchRegions.rejected, handleRejected)

      .addCase(addRegion.pending, handlePending)
      .addCase(addRegion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.regions.push(action.payload);
      })
      .addCase(addRegion.rejected, handleRejected)

      .addCase(removeRegion.pending, handlePending)
      .addCase(removeRegion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.regions.findIndex(
          contact => contact.id === action.payload.id
        );
        state.regions.splice(index, 1);
      })
      .addCase(removeRegion.rejected, handleRejected),
});

export const regionsReducer = regionsSlice.reducer;
