import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.sass';

type PageComponent = FC<PropsWithChildren> & {
  Header: typeof Header;
  Content: typeof Content;
  Footer: typeof Footer;
};

// type PageChild = FC<PropsWithChildren>;

const Page: PageComponent = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

const Header: FC<PropsWithChildren> = ({ children }) => (
  <header className={styles.header}>{children}</header>
);

const Content: FC<PropsWithChildren> = ({ children }) => (
  <main className={styles.content}>{children}</main>
);

const Footer: FC<PropsWithChildren> = ({ children }) => (
  <footer className={styles.footer}>{children}</footer>
);

Page.Header = Header;
Page.Content = Content;
Page.Footer = Footer;

export { Page };
