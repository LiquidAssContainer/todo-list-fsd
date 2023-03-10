import { createContext, FC, PropsWithChildren } from 'react';
import styles from './styles.module.sass';

interface FormGroupContextType {
  controlId?: string;
  required?: boolean;
}

type FormGroupProps = PropsWithChildren & {
  controlId: string;
  required?: boolean;
};

export const FormGroupContext = createContext<FormGroupContextType>({});

export const FormGroup: FC<FormGroupProps> = ({
  children,
  controlId,
  required,
}) => {
  const context = { controlId, required };

  return (
    <FormGroupContext.Provider value={context}>
      <div className={styles.container}>{children}</div>
    </FormGroupContext.Provider>
  );
};
