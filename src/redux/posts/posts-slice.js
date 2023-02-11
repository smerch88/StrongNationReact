import { createSlice } from '@reduxjs/toolkit';
import { fetchAllPostsByCountry, addPost } from './posts-operations';

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllPostsByCountry.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllPostsByCountry.fulfilled, (state, action) => {
        state.isLoading = true;
        state.error = false;
        state.items = action.payload;
      })
      .addCase(fetchAllPostsByCountry.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addPost.pending, state => {
        state.isLoading = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.isLoading = true;
        state.error = false;
        state.items = [action.payload, ...state.items];
      })
      .addCase(addPost.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

const { reducer } = postSlice;
export default reducer;
