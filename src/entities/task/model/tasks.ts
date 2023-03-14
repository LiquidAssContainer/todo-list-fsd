import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { apiService } from 'shared/api/apiService';

export type Task = {
  id: string;
  name: string;
  isDone: boolean;
  description?: string;
  date: number;
};

type TasksState = {
  tasks: Task[];
  isLoading: boolean;
};

const initialState: TasksState = {
  tasks: [],
  isLoading: false,
};

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiService.tasks.get();
      return await response.json();
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const fetchTaskById = createAsyncThunk(
  'tasks/fetchTaskById',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await apiService.tasks.getById(id);
      return await response.json();
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const fetchAddTask = createAsyncThunk(
  'tasks/fetchAddTask',
  async (data: any, { rejectWithValue }) => {
    try {
      // throw new Error('жопка');
      return await apiService.tasks.post(data);
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const deleteTaskAsync: any = createAsyncThunk(
  'tasks/fetchDeleteTask',
  async (id, { rejectWithValue }) => {
    try {
      await apiService.tasks.delete(id);
      return id;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const fetchChangeTask: any = createAsyncThunk(
  'tasks/fetchChangeTask',
  async ({ id, data }: any, { rejectWithValue }) => {
    try {
      // throw new Error('жопка');
      const response: Response = await apiService.tasks.putChanges(id, data);
      return await response.json();
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    changeIsDone: (state, { payload: { id, value } }) => {
      const index = state.tasks.findIndex((task: Task) => task.id === id);
      state.tasks[index].isDone = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchTasks.fulfilled,
        (state, { payload }: PayloadAction<Task[]>) => {
          state.tasks = payload;
          state.isLoading = false;
        },
      )
      .addCase(fetchTasks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(
        deleteTaskAsync.fulfilled,
        (state, { payload }: PayloadAction<string>) => {
          const taskIndex = state.tasks.findIndex(
            (task: Task) => task.id === payload,
          );
          const newTasks = [...state.tasks];
          newTasks.splice(taskIndex, 1);
          state.tasks = newTasks;
        },
      );
  },
});

export const { changeIsDone } = tasksSlice.actions;

export const { reducer } = tasksSlice;
