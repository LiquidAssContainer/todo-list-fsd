import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TaskFormState {
  form: {
    name: string;
    description: string;
  };
}

type FieldEntry = {
  name: 'name' | 'description';
  // name: string;
  value: string;
};

const initialState: TaskFormState = {
  form: {
    name: '',
    description: '',
  },
};

const taskFormSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    changeInputField: (
      state,
      { payload: { name, value } }: PayloadAction<FieldEntry>,
    ) => {
      state.form[name] = value;
    },
    setForm: (state, { payload }) => {
      state.form = payload;
    },
    resetForm: (state) => {
      state.form = { ...initialState.form };
      // state.description = '';
    },
  },
});

export const { changeInputField, setForm, resetForm } = taskFormSlice.actions;

export const { reducer } = taskFormSlice;
