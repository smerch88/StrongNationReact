import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllPostsByCountry,
  addPost,
  deletePost,
  updatePost,
} from './posts-operations';

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    itemsOfRegion: '',
    idOfPost: null,
    isLoading: false,
    error: null,
    images: [],
  },
  reducers: {
    getFilter(state, action) {
      state.itemsOfRegion = action.payload;
    },
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
        state.idOfPost = action.payload.id;
      })
      .addCase(addPost.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deletePost.pending, state => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.isLoading = true;
        state.error = false;
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updatePost.pending, state => {
        state.isLoading = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.items = state.items.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
        state.isLoading = true;
        state.error = false;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

const { actions, reducer } = postSlice;
export const { getFilter } = actions;
export default reducer;
