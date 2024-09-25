import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import rootReducer from './rootReducer';

import {apiService} from '@redux/services/api';
import offlineMiddleware from './middleware/offlineMiddleware';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false})
      .concat(offlineMiddleware)
      .concat(apiService.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
