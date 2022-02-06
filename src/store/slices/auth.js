import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import userService from '../../services/user.service';

const authTokenRemember = JSON.parse(localStorage.getItem('TOKEN_KEY'));
const authTokenSession = JSON.parse(sessionStorage.getItem('TOKEN_KEY'));

//Obtención del token
let authToken="";
  if(authTokenRemember===null){
    authToken=authTokenSession;
  }else{
    authToken=authTokenRemember;
  }

export const login = createAsyncThunk(
  
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await userService.login(email, password);
      return { authToken: data };
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const loginRemember = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await userService.loginRemember(email, password);
      return { authToken: data };
    } catch (error) {
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
