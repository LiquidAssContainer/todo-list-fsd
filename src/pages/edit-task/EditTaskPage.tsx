import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { FormStateType, TaskForm } from 'entities/task-form';
import { setForm } from 'entities/task-form/model';
import { fetchChangeTask, fetchTaskById } from 'entities/task/model';
import { useAppThunkDispatch } from 'shared/lib';
import { Heading } from 'shared/ui/components/Heading';
import { Spinner } from 'shared/ui/components/Spinner';

import styles from './styles.module.sass';
import { LoadingOverlay } from 'shared/ui/components/LoadingOverlay';

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
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppThunkDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  const onSubmit = (data: FormStateType) => {
    setIsLoading(true);
    dispatch(fetchChangeTask({ id, data }))
      .unwrap()
      .then(() => history.push('/'))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    dispatch(fetchTaskById(id))
      .unwrap()
      .then((data) => dispatch(setForm(data)))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      <Heading level={2}>{t('edit_task')}</Heading>
      <LoadingOverlay isLoading={isLoading}>
        <TaskForm onSubmit={onSubmit} type="edit" />
      </LoadingOverlay>
    </>
  );
};

export default EditTaskPage;
