import { FC, ReactNode, ReactElement } from 'react';
import styles from './styles.module.sass';

// type ReactElement = JSX.Element

const Page = ({ children }: { children: ReactNode }) => {
  return <div className={styles.page_container}>{children}</div>;
};

const Header = ({ children }: { children: ReactNode }) => {
  return <header className={styles.page_header}>{children}</header>;
};

const Content = ({ children }: { children: ReactNode }) => {
  return <main className={styles.page_content}>{children}</main>;
};

const Footer = ({ children }: { children: ReactNode }) => {
  return <footer className={styles.page_footer}>{children}</footer>;
};

Page.Header = Header;
Page.Content = Content;
Page.Footer = Footer;

export { Page };
