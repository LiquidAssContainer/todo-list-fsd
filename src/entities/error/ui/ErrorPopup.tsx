import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { resetError } from '../model';

import styles from './styles.module.sass';

export const ErrorPopup: FC = () => {
  const dispatch = useDispatch();
  const { error, message } = useSelector(
    (state: RootStateOrAny) => state.error,
  );

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (error) {
      timer = setTimeout(() => dispatch(resetError()), 5_000);
    }

    return () => clearTimeout(timer);
  }, [error]);

  return error
    ? createPortal(<div className={styles.popup}>{message}</div>, document.body)
    : null;
};
