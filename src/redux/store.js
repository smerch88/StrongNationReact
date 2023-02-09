import { configureStore } from '@reduxjs/toolkit';
import { countryReducer } from './country/country-slice';
import { regionsReducer } from './regions/regions-slice';
import adminReducer from './admin/admin-slice';
import postsReducer from './posts/posts-slice';

export const store = configureStore({
  reducer: {
    isAdmin: adminReducer,
    country: countryReducer,
    regions: regionsReducer,
    posts: postsReducer,
  },
});
