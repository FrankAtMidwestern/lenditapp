import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiService} from '@redux/services/api';
import offlineQueueReducer from './slices/offlineQueueSlice';
import networkReducer from './slices/networkSlice';
import onboardingReducer from './slices/onboardingSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['offlineQueue', 'onboarding', apiService.reducerPath],
};

const rootReducer = combineReducers({
  network: networkReducer,
  offlineQueue: offlineQueueReducer,
  onboarding: onboardingReducer,
  [apiService.reducerPath]: apiService.reducer,
});

export default persistReducer(persistConfig, rootReducer);
