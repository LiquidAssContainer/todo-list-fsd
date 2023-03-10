import { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { FormStateType, TaskForm } from 'entities/task-form';
import { setForm } from 'entities/task-form/model';
import { fetchChangeTask, fetchTaskById } from 'entities/task/model';
import { useAppThunkDispatch } from 'shared/lib';
import { Title } from 'shared/ui/Title';

interface EditTaskPageProps {
  match: {
    params: {
      id: string;
    };
  };
}

const EditTaskPage: FC<EditTaskPageProps> = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useAppThunkDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  const onSubmit = (data: FormStateType) => {
    dispatch(fetchChangeTask({ id, data }))
      .unwrap()
      .then(() => history.push('/'));
  };

  useEffect(() => {
    dispatch(fetchTaskById(id))
      .unwrap()
      .then((data) => dispatch(setForm(data)));
  }, [id]);

  return (
    <>
      <Title level={2}>{t('edit_task')}</Title>
      <TaskForm onSubmit={onSubmit} type="edit" />
    </>
  );
};

export default EditTaskPage;
