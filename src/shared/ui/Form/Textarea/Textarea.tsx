import { FC, TextareaHTMLAttributes } from 'react';
import styles from '../Input/styles.module.sass';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const Textarea: FC<TextareaProps> = ({
  name,
  label,
  // value,
  // placeholder,
  onInput,
  ...props
}) => {
  return (
    <label className={styles.input_container}>
      <textarea
        className={styles.input}
        // placeholder={placeholder}
        name={name}
        // value={value}

        {...props}
      />
      <span className={styles.input_label}>{label}</span>
    </label>
  );
};
