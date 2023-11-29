import { configureStore } from '@reduxjs/toolkit';
import { movieCoreApi } from './services/movieDatabase';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
 

export const store = configureStore({
  reducer: {
    [movieCoreApi.reducerPath]: movieCoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieCoreApi.middleware),
});
setupListeners(store.dispatch)