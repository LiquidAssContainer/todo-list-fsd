import { ChangeEvent, FC, InputHTMLAttributes, SyntheticEvent } from 'react';
import { Icon } from '../Icon';
import { ReactComponent as CheckedIcon } from './icons/check.svg';

import styles from './styles.module.sass';

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  isChecked: boolean;
  label: string;
  onChange: (value: boolean) => void;
  name?: string;
};

export const Checkbox: FC<CheckboxProps> = ({
  isChecked,
  onChange,
  label,
  name,
  ...props
}) => {
  // навешивается на label, поскольку у input нет размеров
  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  const handleChange = ({
    target: { checked },
  }: ChangeEvent<HTMLInputElement>) => {
    onChange(checked);
  };

  return (
    <label className={styles.container} onClick={handleClick}>
      <input
        id={name}
        className={styles.input}
        onChange={handleChange}
        type="checkbox"
        checked={isChecked}
        {...props}
      />
      <div className={styles.input_visual}>
        <Icon className={styles.icon} icon={CheckedIcon} />
      </div>
      <span className={styles.text}>{label}</span>
    </label>
  );
};
