import { FC, PropsWithChildren, SVGAttributes, ReactSVGElement } from 'react';
import cn from 'classnames';

import styles from './styles.module.sass';

type IconComponent = FC<SVGAttributes<ReactSVGElement>>;

interface IconProps extends PropsWithChildren {
  className?: string;
  icon: IconComponent;
}

export const Icon: FC<IconProps> = ({ className, icon: Icon }) => (
  <Icon className={cn(styles.icon, className)} />
);
