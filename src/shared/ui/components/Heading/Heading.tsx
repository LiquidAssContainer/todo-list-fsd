import { FC, PropsWithChildren, createElement } from 'react';
import styles from './styles.module.sass';

interface HeadingProps extends PropsWithChildren {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading: FC<HeadingProps> = ({ children, level }) =>
  createElement(`h${level}`, { className: styles.heading }, children);
