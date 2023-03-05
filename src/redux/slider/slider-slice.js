import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllSliderId,
  removeSliderImage,
  uploadSImage,
} from './slider-operations';

const initialState = {
  slider: [],
  isLoading: false,
  error: null,
};

const sliderSlice = createSlice({
  name: 'slider',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllSliderId.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllSliderId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.slider = action.payload;
      })
      .addCase(fetchAllSliderId.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(removeSliderImage.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeSliderImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeSliderImage.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(uploadSImage.pending, state => {
        state.isLoading = true;
      })
      .addCase(uploadSImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(uploadSImage.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const sliderReducer = sliderSlice.reducer;
