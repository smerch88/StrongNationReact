import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllPostsByCountry,
  addPost,
  getPostPicture,
} from './posts-operations';

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    idOfPost: null,
    isLoading: false,
    error: null,
    images: [],
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
        // })
        // .addCase(getPostPicture.pending, state => {
        //   state.isLoading = true;
        // })
        // .addCase(getPostPicture.fulfilled, (state, action) => {
        //   state.isLoading = true;
        //   state.error = false;
        //   state.images = [action.payload, ...state.images];
        //   state.idOfPost = action.payload.id;
        // })
        // .addCase(getPostPicture.rejected, (state, action) => {
        //   state.error = action.payload;
        //   state.isLoading = false;
      });
  },
});

const { reducer } = postSlice;
export default reducer;
