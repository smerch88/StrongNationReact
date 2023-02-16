import { createSlice } from '@reduxjs/toolkit';
import { loginAdminRequest, logOutAdminRequest } from './admin-operations';

const initialState = {
  userData: null,
  token: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: builder =>
  builder

// LOG IN

  .addCase(loginAdminRequest.pending, (state) => {
    state.isLoading = true;
    state.error = null;
    
  })
  .addCase(loginAdminRequest.fulfilled, (state, action) => {
    console.log(action)
    state.isLoading = false;
    // state.token = action.payload.token;
    state.isLoggedIn = true;
    state.userData = action.payload;
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
    state.userData = null;
    state.isLoggedIn = false;
  })
  .addCase(logOutAdminRequest.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  })
});

const { reducer } = adminSlice;

export default reducer;
