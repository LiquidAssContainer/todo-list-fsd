import { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { FormStateType, TaskForm } from 'entities/task-form';
import { fetchAddTask } from 'entities/task/model';
import { Heading } from 'shared/ui/components/Heading';
import { useAppThunkDispatch } from 'shared/lib';

const AddTaskPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppThunkDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  const onSuccess = () => {
    history.push('/');
  };

  const onSubmit = (data: FormStateType) => {
    dispatch(fetchAddTask(data)).unwrap().then(onSuccess);
  };

  return (
    <>
      <Heading level={2}>{t('new_task')}</Heading>
      <TaskForm onSubmit={onSubmit} type="add" />
    </>
  );
};

export default AddTaskPage;
