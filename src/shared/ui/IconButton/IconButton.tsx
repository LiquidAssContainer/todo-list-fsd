import {
  ButtonHTMLAttributes,
  FC,
  ReactSVGElement,
  SVGAttributes,
  SyntheticEvent,
} from 'react';

import styles from './styles.module.sass';

type IconComponent = FC<SVGAttributes<ReactSVGElement>>;

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  label: string;
  icon: IconComponent;
}

export const IconButton: FC<IconButtonProps> = ({
  children,
  className,
  label,
  onClick,
  icon: Icon,
  ...props
}) => {
  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={handleClick}
      aria-label={label}
      title={label}
      {...props}
    >
      <Icon className={styles.icon} />
    </button>
  );
};
