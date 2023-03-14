import { ButtonHTMLAttributes, FC } from 'react';

import styles from './styles.module.sass';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
