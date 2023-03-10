import { FC, PropsWithChildren } from 'react';

import styles from './styles.module.sass';

export const HeaderTitle: FC<PropsWithChildren> = ({ children }) => (
  <h1 className={styles.title} translate="no">
    {children}
  </h1>
);
