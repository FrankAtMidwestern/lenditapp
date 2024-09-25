import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiService} from '@redux/services/api';
import offlineQueueReducer from './slices/offlineQueueSlice';
import networkReducer from './slices/networkSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['offlineQueue', apiService.reducerPath],
};

const rootReducer = combineReducers({
  network: networkReducer,
  offlineQueue: offlineQueueReducer,
  [apiService.reducerPath]: apiService.reducer,
});

export default persistReducer(persistConfig, rootReducer);
