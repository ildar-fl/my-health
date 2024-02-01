import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from './types';

const localStorageUser = window.localStorage.getItem('user');

const initialState = localStorageUser
  ? (JSON.parse(localStorageUser) as IUser)
  : null;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<IUser>) => action.payload,
    resetUser: () => null,
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
