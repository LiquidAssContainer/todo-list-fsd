import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { TaskList } from 'widgets/task-list';
import { fetchTasks } from 'entities/task/model';
import { Heading } from 'shared/ui/components/Heading';

const TaskListPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <>
      <Heading level={2}>{t('task_list')}</Heading>
      <TaskList />
    </>
  );
};

export default TaskListPage;
