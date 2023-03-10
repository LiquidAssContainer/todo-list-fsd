import { FC, PropsWithChildren, createElement } from 'react';
import styles from './styles.module.sass';

type TitleProps = PropsWithChildren & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Title: FC<TitleProps> = ({ children, level }) =>
  createElement(`h${level}`, { className: styles.heading }, children);
