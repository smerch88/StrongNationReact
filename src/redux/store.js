import { configureStore } from '@reduxjs/toolkit';
import { countryReducer } from './country/country-slice';
import { regionsReducer } from './regions/regions-slice';
import {adminReducer} from './admin/admin-slice';
import postsReducer from './posts/posts-slice';
import { oblIdReducer } from './oblID/oblId-slice';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'token',
  whitelist: ['token'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, adminReducer);

export const store = configureStore({
  reducer: {
    admin: persistedReducer,
    country: countryReducer,
    regions: regionsReducer,
    posts: postsReducer,
    oblId: oblIdReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
