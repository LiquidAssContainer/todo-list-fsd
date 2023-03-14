import { FC, PropsWithChildren } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

import styles from './styles.module.sass';

type NavbarComponent = FC<PropsWithChildren> & {
  Link: typeof Link;
};

interface LinkProps extends NavLinkProps {}

const Navbar: NavbarComponent = ({ children }) => (
  <nav className={styles.navbar}>{children}</nav>
);

const Link: FC<LinkProps> = ({ children, to, ...props }) => (
  <NavLink
    className={styles.link}
    activeClassName={styles.active}
    to={to}
    {...props}
  >
    {children}
  </NavLink>
);

Navbar.Link = Link;

export { Navbar };
