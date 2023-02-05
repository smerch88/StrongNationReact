import { configureStore } from '@reduxjs/toolkit';
import { regionsReducer } from './regions/regions-slice';

export const store = configureStore({
  reducer: {
    regions: regionsReducer,
  },
});
