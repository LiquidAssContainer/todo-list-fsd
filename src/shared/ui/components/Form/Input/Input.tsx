import { FC, InputHTMLAttributes } from 'react';

import styles from './styles.module.sass';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: FC<InputProps> = ({
  label,
  // value,
  placeholder,
  onInput,
  ...props
}) => {
  return (
    // <label className={styles.input_container}>
    <input className={styles.input} {...props} />
    // <span className={styles.input_label}>{label}</span>
    // </label>
  );
};
