import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/auth';

// Reducers
const reducer = {
    auth: authReducer
  };

/** Store configuration, combine all app states */
const store = configureStore({
    reducer,
    devTools: true,
  });

  export default store;