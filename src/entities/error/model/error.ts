import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ErrorSliceState {
  error: boolean;
  message: string;
}

const initialState: ErrorSliceState = {
  error: false,
  message: '',
};

const isRejectedAction = (action: PayloadAction) =>
  action.type.endsWith('rejected');

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    resetError: (state) => {
      // state = { ...initialState };
      state.error = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      isRejectedAction,
      (state, { payload }: PayloadAction<ErrorEvent>) => {
        state.error = true;
        state.message = payload.message;
      },
    );
  },
});

export const { resetError } = errorSlice.actions;

export const { reducer } = errorSlice;
