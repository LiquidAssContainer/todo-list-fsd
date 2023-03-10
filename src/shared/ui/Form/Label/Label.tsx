import { FC, LabelHTMLAttributes, useContext } from 'react';
import cn from 'classnames';

import { FormGroupContext } from '../FormGroup/FormGroup';

import styles from './styles.module.sass';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: FC<LabelProps> = ({ children, ...props }) => {
  const { controlId, required } = useContext(FormGroupContext);

  return (
    <label
      className={cn(styles.label, { [styles.required]: required })}
      htmlFor={controlId}
      {...props}
    >
      {children}
    </label>
  );
};
