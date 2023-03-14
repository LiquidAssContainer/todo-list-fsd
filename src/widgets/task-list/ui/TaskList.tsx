import { useSelector } from 'react-redux';

import { TaskItem, TaskItemProps } from './TaskItem';
import { LoadingOverlay } from 'shared/ui/components/LoadingOverlay';

import styles from './styles.module.sass';

export const TaskList = () => {
  const { tasks, isLoading } = useSelector((state: any) => state.tasks);

  return (
    <LoadingOverlay isLoading={isLoading}>
      {tasks.length ? (
        <ul className={styles.task_list}>
          {tasks.map((props: TaskItemProps) => (
            <li key={props.id} className={styles.task_item}>
              <TaskItem {...props} />
            </li>
          ))}
        </ul>
      ) : isLoading ? null : (
        <div>Пока что задач нет</div>
      )}
    </LoadingOverlay>
  );
};
