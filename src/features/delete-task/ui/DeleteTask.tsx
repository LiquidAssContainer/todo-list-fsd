import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { deleteTaskAsync } from 'entities/task/model';
import { IconButton } from 'shared/ui/components/IconButton';
import { Spinner } from 'shared/ui/components/Spinner';
import { useAppThunkDispatch } from 'shared/lib';
import { ReactComponent as DeleteBtnIcon } from './icons/cross.svg';

import styles from './styles.module.sass';
import { Icon } from 'shared/ui/components/Icon';

interface DeleteTaskProps {
  id: string;
}

export const DeleteTask: FC<DeleteTaskProps> = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppThunkDispatch();

  const handleClick = () => {
    setIsLoading(true);
    dispatch(deleteTaskAsync(id))
      .unwrap()
      .catch(() => setIsLoading(false));
  };

  const label: string = t('task.delete');

  return isLoading ? (
    <Spinner className={styles.spinner} />
  ) : (
    <IconButton
      className={styles.delete_button}
      onClick={handleClick}
      label={label}
    >
      <Icon icon={DeleteBtnIcon} />
    </IconButton>
  );
};
