import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleTask } from 'features/toggle-task';
import { DeleteTask } from 'features/delete-task';
import { EditTaskButton } from 'features/edit-task';
import { ExpandableRow } from 'shared/ui/components/ExpandableRow';
import { ReactComponent as DescriptionIcon } from './icons/description.svg';

import styles from './styles.module.sass';
import { Icon } from 'shared/ui/components/Icon';

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
  const { t } = useTranslation();
  const hasDescription: boolean = Boolean(description);
  const hasDescriptionTitle: string = t('task.has-description');

  return (
    <ExpandableRow hasContent={hasDescription}>
      <ExpandableRow.Summary>
        <ToggleTask id={id} isDone={isDone} />
        <div className={styles.task_name}>
          {isDone ? <del className={styles.task_done}>{name}</del> : name}
          {description && (
            <div
              className={styles.description_icon_wrapper}
              title={hasDescriptionTitle}
            >
              <Icon
                className={styles.description_icon}
                icon={DescriptionIcon}
              />
            </div>
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
