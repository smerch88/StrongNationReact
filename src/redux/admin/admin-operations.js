import { Notify } from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  adminLogOut,
  clearAuthHeader,
  loginAdmin,
  setAuthHeader,
} from 'services/api-admin';

export const loginAdminRequest = createAsyncThunk(
  'admin/login',
  async (formData, thunkApi) => {
    try {
      const response = await loginAdmin(formData);
      if (!response.token) {
        throw new Error('Invalid email or password');
      }
      setAuthHeader(response.token);
      return response;
    } catch (error) {
      Notify.failure(error.message);
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

export const refreshAdmin = createAsyncThunk(
  'admin/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.admin.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      return setAuthHeader(persistedToken);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
