import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { TaskList } from 'widgets/task-list';
import { fetchTasks } from 'entities/task/model';
import { Title } from 'shared/ui/Title';

const TaskListPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <>
      <Title level={2}>{t('task_list')}</Title>
      <TaskList />
    </>
  );
};

export default TaskListPage;
