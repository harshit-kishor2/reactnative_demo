import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axiosRequest from '../utils/axiosRequest';

export const AUTH_FEATURE_KEY = 'auth';

export const authAdapter = createEntityAdapter();

export const initialAuthState = authAdapter.getInitialState({
  loadingStatus: 'not loaded',
  loginLoadingStatus: 'not loaded',
  registerLoadingStatus: 'not loaded',
  userDetails: null,
  error: null,
  loginError: null,
  registerError: null,
});

/**
 * For forgot password
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
      //registerAction
      .addCase(registerAction.pending, state => {
        state.registerLoadingStatus = 'loading';
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.registerLoadingStatus = 'loaded';
      })
      .addCase(registerAction.rejected, (state, action) => {
        console.log('Action', action);
        state.registerLoadingStatus = 'error';
        state.registerError = action.payload || action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const authReducer = authSlice.reducer;

export const authActions = authSlice.actions;
