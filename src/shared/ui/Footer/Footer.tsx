import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.sass';

type FooterComponent<P> = FC<P> & {
  Row: typeof FooterRow;
};

const FooterRow: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.footer_row}>{children}</div>
);

const Footer: FooterComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer}>{children}</div>
    </div>
  );
};

Footer.Row = FooterRow;

export { Footer };
