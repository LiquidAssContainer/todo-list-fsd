import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { IconButton } from 'shared/ui/components/IconButton';
import { Icon } from 'shared/ui/components/Icon';
import { ReactComponent as EditBtnIcon } from './pencil.svg';

import styles from './styles.module.sass';

interface EditTaskProps {
  id: string;
}

export const EditTaskButton: FC<EditTaskProps> = ({ id }) => {
  const { t } = useTranslation();
  const history = useHistory();

  const handleClick = (): void => {
    history.push(`/edit/${id}`);
  };

  const label: string = t('task.edit');

  return (
    <IconButton
      className={styles.edit_button}
      onClick={handleClick}
      label={label}
    >
      <Icon icon={EditBtnIcon} />
    </IconButton>
  );
};
