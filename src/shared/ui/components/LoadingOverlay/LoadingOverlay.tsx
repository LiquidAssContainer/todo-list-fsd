import { FC, PropsWithChildren } from 'react';
import { Spinner } from '../Spinner';

import styles from './styles.module.sass';

interface LoadingOverlayProps extends PropsWithChildren {
  isLoading: boolean;
  spinnerClassName?: string;
}

export const LoadingOverlay: FC<LoadingOverlayProps> = ({
  children,
  isLoading,
  spinnerClassName,
}) => (
  <div className={styles.container}>
    {isLoading ? (
      <div className={styles.spinner_wrapper}>
        <Spinner className={spinnerClassName} />
      </div>
    ) : null}
    {children}
  </div>
);
