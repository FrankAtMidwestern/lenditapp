import {enqueueAction} from '@redux/slices/offlineQueueSlice';
import {isOfflineAction} from '@redux/utils/actionGuards';
import {Middleware} from '@reduxjs/toolkit';

const offlineMiddleware: Middleware = storeAPI => next => action => {
  if (isOfflineAction(action) && action.meta.offline) {
    const state = storeAPI.getState();
    const isConnected = state.network.isConnected;

    if (!isConnected) {
      storeAPI.dispatch(enqueueAction(action));
    } else {
      next(action);
    }
  } else {
    next(action);
  }
};

export default offlineMiddleware;
