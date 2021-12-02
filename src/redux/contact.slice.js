import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axiosRequest from '../utils/axiosRequest';

export const CONTACT_FEATURE_KEY = 'contact';

export const contactAdapter = createEntityAdapter();

export const initialContactState = contactAdapter.getInitialState({
  contactLoadingStatus: 'not loaded',
  contactList: null,
  contactError: null,
});
/**
 * Contact List Action
 */
export const contactListAction = createAsyncThunk(
  'auth/contactListAction',
  async (params, thunkAPI) => {
    try {
      const response = await axiosRequest({
        url: '/contacts/',
        method: 'GET',
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
export const contactSlice = createSlice({
  name: CONTACT_FEATURE_KEY,
  initialState: initialContactState,
  reducers: {
    add: contactAdapter.addOne,
    remove: contactAdapter.removeOne,
    resetContactState: (state, action) => {
      return {
        ...state,
      };
    },
  },
  extraReducers: builder => {
    builder
      //Check Contact List
      .addCase(contactListAction.pending, state => {
        state.contactLoadingStatus = 'loading';
      })
      .addCase(contactListAction.fulfilled, (state, action) => {
        state.contactLoadingStatus = 'loaded';
        state.contactList = action.payload;
      })
      .addCase(contactListAction.rejected, (state, action) => {
        state.contactLoadingStatus = 'error';
        state.contactError = action.payload || action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const contactReducer = contactSlice.reducer;

export const contactActions = contactSlice.actions;
