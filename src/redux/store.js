import { configureStore } from '@reduxjs/toolkit';
import { regionsReducer } from './regions/regions-slice';
import adminReducer from './admin/admin-slice';

export const store = configureStore({
  reducer: {
    isAdmin: adminReducer,
    regions: regionsReducer,
  },
});
