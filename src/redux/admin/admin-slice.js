import { createSlice } from '@reduxjs/toolkit';

import {
  loginAdminRequest,
  logOutAdminRequest,
  refreshAdmin,
} from './admin-operations';

const initialState = {
  token: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  // reducers:{
  //   refreshAdmin(state){
  //     state.isLoggedIn = true;
  //   }
  // },
  extraReducers: builder =>
    builder

      // LOG IN

      .addCase(loginAdminRequest.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginAdminRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginAdminRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // LOG OUT

      .addCase(logOutAdminRequest.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOutAdminRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOutAdminRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(refreshAdmin.fulfilled, state => {
        state.isLoggedIn = true;
      }),
});

// export const { refreshAdmin } = adminSlice.actions;
export const adminReducer = adminSlice.reducer;
