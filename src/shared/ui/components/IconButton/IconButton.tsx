import { FC, ButtonHTMLAttributes, SyntheticEvent } from 'react';
import cn from 'classnames';

import styles from './styles.module.sass';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
}

export const IconButton: FC<IconButtonProps> = ({
  children,
  className,
  label,
  onClick,
  ...props
}) => {
  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <button
      className={cn(styles.button, className)}
      onClick={handleClick}
      aria-label={label}
      title={label}
      {...props}
    >
      {children}
    </button>
  );
};
