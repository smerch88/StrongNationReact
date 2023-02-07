import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    isAdmin: true,
  },
  extraReducers: {},
});

const { reducer } = adminSlice;

export default reducer;
