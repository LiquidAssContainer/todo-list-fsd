import { configureStore } from '@reduxjs/toolkit';

import { errorModel } from 'entities/error';
import { taskModel } from 'entities/task';
import { taskFormModel } from 'entities/task-form';

export const store = configureStore({
  reducer: {
    tasks: taskModel.reducer,
    error: errorModel.reducer,
    taskForm: taskFormModel.reducer,
  },
});
