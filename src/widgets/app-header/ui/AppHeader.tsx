import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Navbar } from 'shared/ui/components/Navbar';

import styles from './styles.module.sass';

const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <span className={styles.colored_text} data-color="#276eef">
        ToDo
      </span>
      List
    </div>
  );
};

export const AppHeader: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header}>
        <div className={styles.logo_wrapper}>
          <Logo />
        </div>

        <Navbar>
          <Navbar.Link exact to="/">
            {t('header.tasks')}
          </Navbar.Link>

          <Navbar.Link exact to="/add">
            {t('header.add')}
          </Navbar.Link>
        </Navbar>
      </div>
    </div>
  );
};
