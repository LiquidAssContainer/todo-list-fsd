import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { LanguageSelect } from 'features/change-language';
import { SocialLink, socialLinkModel } from 'entities/social-link';

import styles from './styles.module.sass';
import { Footer } from 'shared/ui/components/Footer';

interface AppFooterLinkProps extends PropsWithChildren {
  to: string;
}

const AppFooterLink: FC<AppFooterLinkProps> = ({ children, to }) => (
  <Link className={styles.link} to={to}>
    {children}
  </Link>
);

export const AppFooter = () => {
  const { t } = useTranslation();

  return (
    <Footer>
      <Footer.Row>
        <ul className={styles.link_list}>
          <AppFooterLink to="/about">{t('footer.about')}</AppFooterLink>
          <AppFooterLink to="/contacts">{t('footer.contacts')}</AppFooterLink>
          <AppFooterLink to="/terms-of-service">
            {t('footer.terms-of-service')}
          </AppFooterLink>
        </ul>
        <LanguageSelect />
      </Footer.Row>

      <Footer.Row>
        <div className={styles.copyright}>
          © {new Date().getFullYear()}, ToDoList
        </div>

        <ul className={styles.social_list}>
          {socialLinkModel.socialList.map(({ name, title, link }) => (
            <li key={link}>
              <SocialLink title={title} icon={name} href={link} />
            </li>
          ))}
        </ul>
      </Footer.Row>
    </Footer>
  );
};
