import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { Form } from 'shared/ui/Form';
import { changeInputField } from './model';

type TaskFieldName = 'name' | 'description';

export interface FormStateType {
  name: TaskFieldName;
  description?: string | null;
}

interface TaskFormProps {
  onSubmit: (data: FormStateType) => void;
  type: 'add' | 'edit';
}

interface FieldChangeParams {
  name: TaskFieldName;
  value: string;
}

export const TaskForm: FC<TaskFormProps> = ({ onSubmit, type }) => {
  const { t } = useTranslation();
  const { form } = useSelector((state: RootStateOrAny) => state.taskForm);
  const dispatch = useDispatch();

  const handleSubmit = (): void => {
    onSubmit(form);
  };

  const onFieldChange = ({ name, value }: FieldChangeParams): void => {
    dispatch(changeInputField({ name, value }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name" required>
        <Form.Label>{t('title_label')}</Form.Label>
        <Form.Control
          onChange={onFieldChange as any}
          name="name"
          value={form.name}
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>{t('description_label')}</Form.Label>
        <Form.Control
          isTextarea
          onChange={onFieldChange as any}
          name="description"
          value={form.description}
        />
      </Form.Group>

      <Form.Button type="submit">
        {type === 'add' ? t('form.add-submit') : t('form.edit-submit')}
      </Form.Button>
    </Form>
  );
};
