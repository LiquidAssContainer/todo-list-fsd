import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { changeIsDone, fetchChangeTask } from 'entities/task/model';
import { Checkbox } from 'shared/ui/components/Checkbox';

import styles from './styles.module.sass';
import { useAppThunkDispatch } from 'shared/lib';

type ToggleTaskProps = {
  id: string;
  isDone: boolean;
};

export const ToggleTask: FC<ToggleTaskProps> = ({ id, isDone }) => {
  const { t } = useTranslation();
  const dispatch = useAppThunkDispatch();

  const onToggle = (value: boolean): void => {
    dispatch(changeIsDone({ id, value }));
    dispatch(fetchChangeTask({ id, data: { isDone: value } }))
      .unwrap()
      .catch(() => {
        dispatch(changeIsDone({ id, value: !value }));
      });
  };

  const label = t('toggle-task');

  return (
    <div className={styles.wrapper}>
      <Checkbox label={label} isChecked={isDone} onChange={onToggle} />
    </div>
  );
};
