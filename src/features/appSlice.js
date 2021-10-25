import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channelId: null,
  channelName: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setChannelId: (state,action) => {
      state.app = action.payload
    },
    logout: (state) => {
      state.app = null;
    }
  },
});

export const { setChannelId, logout } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;


export default appSlice.reducer;
