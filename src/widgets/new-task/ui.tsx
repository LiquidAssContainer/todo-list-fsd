import { useDispatch } from 'react-redux';

import { TaskForm } from 'entities/task-form';
// import { addTask } from 'entities/task/model';

export const AddTaskForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    // dispatch(addTask(data));
  };

  return <TaskForm type="edit" onSubmit={onSubmit} />;
};
