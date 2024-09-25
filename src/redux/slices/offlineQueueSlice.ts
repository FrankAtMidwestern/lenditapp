import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface OfflineQueueState {
  actions: any[];
}

const initialState: OfflineQueueState = {
  actions: [],
};

const offlineQueueSlice = createSlice({
  name: 'offlineQueue',
  initialState,
  reducers: {
    enqueueAction: (state, action: PayloadAction<any>) => {
      state.actions.push(action.payload);
    },
    dequeueActions: state => {
      state.actions = [];
    },
  },
});

export const {enqueueAction, dequeueActions} = offlineQueueSlice.actions;
export default offlineQueueSlice.reducer;
