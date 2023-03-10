import styles from './styles.module.sass';
import { taskModel } from 'entities/task';
import { TaskItem, TaskItemProps } from './TaskItem';
import { useSelector } from 'react-redux';
import { Spinner } from 'shared/ui/Spinner';

export const TaskList = () => {
  const { tasks, isLoading } = useSelector((state: any) => state.tasks);

  return isLoading ? (
    <Spinner />
  ) : tasks.length ? (
    <ul className={styles.task_list}>
      {tasks.map((props: TaskItemProps) => (
        <TaskItem key={props.id} {...props} />
      ))}
    </ul>
  ) : (
    <div>Пока что задач нет</div>
  );
};
