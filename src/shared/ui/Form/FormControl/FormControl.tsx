import {
  ChangeEvent,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useContext,
} from 'react';
import { FormGroupContext } from '../FormGroup';

import styles from './styles.module.sass';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

type FormControlProps<T extends boolean> = {
  controlId: string;
} & T extends true
  ? TextareaProps & { isTextarea: true }
  : InputProps & { isTextarea?: false };

export function FormControl<T extends boolean>(
  props: { onChange: (obj: any) => void; isTextarea?: T } & FormControlProps<T>,
) {
  const {
    // value,
    isTextarea,
    // placeholder,
    // onInput,
    // controlId,
    onChange,
    ...restProps
  } = props;

  const { controlId, required } = useContext(FormGroupContext);

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const {
      target: { name, value },
    } = e;
    onChange({ name, value });
  };

  return isTextarea ? (
    <textarea
      className={styles.form_control}
      id={controlId}
      required={required}
      onChange={handleChange}
      {...(restProps as TextareaProps)}
    />
  ) : (
    <input
      className={styles.form_control}
      id={controlId}
      required={required}
      onChange={handleChange}
      {...(restProps as InputProps)}
    />
  );
}
