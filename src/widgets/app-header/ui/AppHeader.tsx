import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ColoredText } from 'shared/ui/ColoredText';
import { Navbar } from 'shared/ui/Navbar';

import styles from './styles.module.sass';

const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <ColoredText color="#276eef">ToDo</ColoredText>List
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
