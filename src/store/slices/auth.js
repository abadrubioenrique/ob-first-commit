import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';

import userService from '../../services/user.service';

const authToken = JSON.parse(localStorage.getItem('TOKEN_KEY'));

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await userService.login(email, password);
      return { authToken: data };
    } catch (error) {
      const message = (error.response
          && error.response.data
          && error.response.data.message)
        || error.message
        || error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await userService.logout();
});

const initialState = authToken
  ? { isLoggedIn: true, authToken }
  : { isLoggedIn: false, authToken: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = true;
      // eslint-disable-next-line no-param-reassign
      state.authToken = action.payload.authToken;
    },
    // eslint-disable-next-line no-unused-vars
    [login.rejected]: (state, action) => {
        // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = false;
      // eslint-disable-next-line no-param-reassign
      state.authToken = null;
    },
    // eslint-disable-next-line no-unused-vars
    [logout.fulfilled]: (state, action) => {
        // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = false;
      // eslint-disable-next-line no-param-reassign
      state.authToken = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
