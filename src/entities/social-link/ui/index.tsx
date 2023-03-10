import { AnchorHTMLAttributes, FC, SVGProps } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, YoutubeIcon } from './icons';

import styles from './styles.module.sass';

interface IconProps extends SVGProps<SVGElement> {}

type IconMap = {
  [key: string]: FC<IconProps>;
};

const icons: IconMap = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  youtube: YoutubeIcon,
};

interface SocialLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: string;
}

export const SocialLink: FC<SocialLinkProps> = ({ icon, ...props }) => {
  const Icon = icons[icon];

  return (
    <a className={styles.social_link} target="_blank" {...props}>
      <Icon className={styles.social_icon} />
    </a>
  );
};
