import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'core/user/reducer';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export { store };
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
