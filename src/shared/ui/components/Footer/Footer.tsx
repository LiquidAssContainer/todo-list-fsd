import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.sass';

type FooterComponent = FC<PropsWithChildren> & {
  Row: typeof FooterRow;
};

const Footer: FooterComponent = ({ children }) => (
  <div className={styles.wrapper}>
    <div className={styles.footer}>{children}</div>
  </div>
);

const FooterRow: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.footer_row}>{children}</div>
);

Footer.Row = FooterRow;

export { Footer };
