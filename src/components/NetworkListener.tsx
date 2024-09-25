// src/components/NetworkListener.tsx
import {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '@redux/store';
import {setIsConnected} from '@redux/slices/networkSlice';
import {dequeueActions} from '@redux/slices/offlineQueueSlice';

const NetworkListener = () => {
  const dispatch = useDispatch();

  const isConnected = useSelector(
    (state: RootState) => state.network.isConnected,
  );

  const offlineActions = useSelector(
    (state: RootState) => state.offlineQueue.actions,
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      dispatch(setIsConnected(state.isConnected ?? true));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  useEffect(() => {
    if (isConnected && offlineActions.length > 0) {
      offlineActions.forEach((action: any) => {
        dispatch(action);
      });
      dispatch(dequeueActions());
    }
  }, [isConnected, offlineActions, dispatch]);

  return null;
};

export default NetworkListener;
