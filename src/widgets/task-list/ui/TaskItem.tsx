import { FC } from 'react';

import { ToggleTask } from 'features/toggle-task';
import { DeleteTask } from 'features/delete-task';
import { EditTaskButton } from 'features/edit-task';
import { ExpandableRow } from 'shared/ui/components/ExpandableRow';
import { ReactComponent as DescriptionIcon } from './icons/description.svg';

import styles from './styles.module.sass';

export type TaskItemProps = {
  id: string;
  name: string;
  description: string;
  isDone: boolean;
};

export const TaskItem: FC<TaskItemProps> = ({
  id,
  name,
  description,
  isDone,
}) => {
  const hasDescription = Boolean(description);

  return (
    <ExpandableRow hasContent={hasDescription}>
      <ExpandableRow.Summary>
        <ToggleTask id={id} isDone={isDone} />
        <div className={styles.task_name}>
          {isDone ? <del className={styles.task_done}>{name}</del> : name}
          {description && (
            <DescriptionIcon className={styles.description_icon} />
          )}
        </div>
        <div className={styles.controls_container}>
          <EditTaskButton id={id} />
          <DeleteTask id={id} />
        </div>
      </ExpandableRow.Summary>

      <ExpandableRow.Content>{description}</ExpandableRow.Content>
    </ExpandableRow>
  );
};
