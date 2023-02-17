import { configureStore } from '@reduxjs/toolkit';
import { countryReducer } from './country/country-slice';
import { regionsReducer } from './regions/regions-slice';
import adminReducer from './admin/admin-slice';
import postsReducer from './posts/posts-slice';
import { oblIdReducer } from './oblID/oblId-slice';

export const store = configureStore({
  reducer: {
    isAdmin: adminReducer,
    country: countryReducer,
    regions: regionsReducer,
    posts: postsReducer,
    oblId: oblIdReducer,
  },
});
