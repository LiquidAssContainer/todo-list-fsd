import { FC, FormEvent, FormHTMLAttributes } from 'react';

import { Button } from './Button';
import { FormControl } from './FormControl';
import { FormGroup } from './FormGroup';
import { Input } from './Input';
import { Label } from './Label';
import { Textarea } from './Textarea';

import styles from './styles.module.sass';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  onSubmit: VoidFunction;
}

type FormComponent = FC<FormProps> & {
  Group: typeof FormGroup;
  Control: typeof FormControl;
  Label: typeof Label;
  Input: typeof Input;
  Textarea: typeof Textarea;
  Button: typeof Button;
};

const Form: FormComponent = ({ children, onSubmit, ...props }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
};

Form.Group = FormGroup;
Form.Control = FormControl;
Form.Label = Label;
Form.Input = Input;
Form.Textarea = Textarea;
Form.Button = Button;

export { Form };
