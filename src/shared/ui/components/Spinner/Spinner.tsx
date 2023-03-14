import { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.sass';

interface SpinnerProps {
  className?: string;
}

export const Spinner: FC<SpinnerProps> = ({ className }) => (
  <div className={styles.wrapper}>
    <div className={cn(styles.spinner, className)} />
  </div>
);
