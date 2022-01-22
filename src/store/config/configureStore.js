import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/auth';
import messageReducer from '../slices/message';

// Reducers
const reducer = {
    auth: authReducer,
    message: messageReducer,
  };

/** Store configuration, combine all app states */
const store = configureStore({
    reducer,
    devTools: true,
  });

  export default store;