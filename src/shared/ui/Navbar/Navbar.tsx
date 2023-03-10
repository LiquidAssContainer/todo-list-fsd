import { FC, PropsWithChildren } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

import styles from './styles.module.sass';

type NavbarComponent<P> = FC<P> & {
  Link: typeof Link;
};

interface LinkProps extends NavLinkProps {}

const Link: FC<LinkProps> = ({ children, to, ...props }) => {
  return (
    <NavLink
      className={styles.navbar_link}
      activeClassName={styles.active}
      to={to}
      {...props}
    >
      {children}
    </NavLink>
  );
};

const Navbar: NavbarComponent<PropsWithChildren> = ({ children }) => (
  <nav className={styles.navbar}>{children}</nav>
);

Navbar.Link = Link;

export { Navbar };
