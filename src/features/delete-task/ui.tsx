import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { deleteTaskAsync } from 'entities/task/model';
import { IconButton } from 'shared/ui/IconButton';
import { ReactComponent as DeleteBtnIcon } from './cross.svg';

import styles from './styles.module.sass';

interface DeleteTaskProps {
  id: string;
}

export const DeleteTask: FC<DeleteTaskProps> = ({ id }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteTaskAsync(id));
  };

  const label: string = t('task.delete');

  return (
    <IconButton
      className={styles.delete_button}
      onClick={handleClick}
      icon={DeleteBtnIcon}
      label={label}
    />
  );
};
