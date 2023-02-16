import { createAsyncThunk } from '@reduxjs/toolkit';

const {
  loginAdmin,
  adminLogOut,
  setAuthHeader,
  clearAuthHeader,
} = require('components/services/api-admin');

export const loginAdminRequest = createAsyncThunk(
  'admin/login',
  async (formData, thunkApi) => {
    try {
      const response = await loginAdmin(formData);
      setAuthHeader(response.token);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOutAdminRequest = createAsyncThunk(
  'admin/logOut',
  async (_, thunkApi) => {
    try {
      const response = await adminLogOut();
      clearAuthHeader();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
