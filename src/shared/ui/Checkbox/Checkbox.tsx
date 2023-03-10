import { ChangeEvent, FC, InputHTMLAttributes, SyntheticEvent } from 'react';
import cn from 'classnames';

import { ReactComponent as CheckedIcon } from './icons/check.svg';

import styles from './styles.module.sass';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  isChecked: boolean;
  label: string;
  onChange: (e: any) => void;
  className?: string;
  name?: string;
}

export const Checkbox: FC<CheckboxProps> = ({
  isChecked,
  onChange,
  className,
  label,
  name,
  ...props
}) => {
  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  const handleChange = ({
    target: { checked },
  }: ChangeEvent<HTMLInputElement>) => {
    onChange(checked);
  };

  return (
    <label onClick={handleClick} className={`${styles.checkbox_container}`}>
      <input
        id={name}
        className={cn(className, styles.checkbox_input, styles.visually_hidden)}
        onChange={handleChange}
        type="checkbox"
        checked={isChecked}
        {...props}
      />
      <div className={styles.checkbox_input_visual}>
        <CheckedIcon className={styles.icon} />
      </div>
      <span className={`${styles.checkbox_text} ${styles.visually_hidden}`}>
        {label}
      </span>
    </label>
  );
};
