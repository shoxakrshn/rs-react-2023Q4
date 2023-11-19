import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import basicReducer from './slice';
import { disneyApi } from './api';

export const rootReducer = combineReducers({
  basic: basicReducer,
  [disneyApi.reducerPath]: disneyApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddlware) =>
      getDefaultMiddlware().concat(disneyApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
