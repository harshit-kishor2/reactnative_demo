import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axiosRequest from '../utils/axiosRequest';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AUTH_FEATURE_KEY = 'auth';

export const authAdapter = createEntityAdapter();

export const initialAuthState = authAdapter.getInitialState({
  loadingStatus: 'not loaded',
  loginLoadingStatus: 'not loaded',
  logoutLoadingStatus: 'not loaded',
  registerLoadingStatus: 'not loaded',
  isLoggedin: false,
  userDetails: null,
  error: null,
  loginError: null,
  logoutError: null,
  registerError: null,
});

/**
 * For Registration
 */
export const registerAction = createAsyncThunk(
  'auth/registerAction',
  async (params, thunkAPI) => {
    try {
      const response = await axiosRequest({
        url: 'auth/register',
        method: 'POST',
        data: params,
      });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response?.data : error.message,
      );
    }
  },
);

/**
 * Login Action
 */
export const loginAction = createAsyncThunk(
  'auth/loginAction',
  async (params, thunkAPI) => {
    try {
      const response = await axiosRequest({
        url: 'auth/login',
        method: 'POST',
        data: params,
      });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response?.data : error.message,
      );
    }
  },
);

/**
 * Logout Action
 */

export const logoutAction = createAsyncThunk(
  'auth/logoutAction',
  async (params, thunkAPI) => {
    try {
      AsyncStorage.clear();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response?.data : error.message,
      );
    }
  },
);

/**
 * Slice for all reducres
 */
export const authSlice = createSlice({
  name: AUTH_FEATURE_KEY,
  initialState: initialAuthState,
  reducers: {
    add: authAdapter.addOne,
    remove: authAdapter.removeOne,
    resetAuthState: (state, action) => {
      return {
        ...state,
      };
    },
  },
  extraReducers: builder => {
    builder
      //login
      .addCase(loginAction.pending, state => {
        state.loginLoadingStatus = 'loading';
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loginLoadingStatus = 'loaded';
        state.userDetails = action.payload.user;
        state.isLoggedin = true;
        //set token and user details after login in localstorage
        AsyncStorage.setItem('@user', JSON.stringify(action.payload.user));
        AsyncStorage.setItem('@token', action.payload.token);
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loginLoadingStatus = 'error';
        state.loginError = action.payload || action.error.message;
      })
      //registerAction
      .addCase(registerAction.pending, state => {
        state.registerLoadingStatus = 'loading';
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.registerLoadingStatus = 'loaded';
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.registerLoadingStatus = 'error';
        state.registerError = action.payload || action.error.message;
      })
      //Logout
      .addCase(logoutAction.pending, state => {
        state.logoutLoadingStatus = 'loading';
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.logoutLoadingStatus = 'loaded';
        state.isLoggedin = false;
      })
      .addCase(logoutAction.rejected, (state, action) => {
        state.logoutLoadingStatus = 'error';
        state.logoutError = action.payload || action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const authReducer = authSlice.reducer;

export const authActions = authSlice.actions;
