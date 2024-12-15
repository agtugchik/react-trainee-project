import { UseFormReturn } from 'react-hook-form';
import { BaseForm } from './sign-in-up-form';

export interface BaseInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<BaseForm, any, undefined>;
}

export interface PasswordInputProps extends BaseInputProps {
  isConfirm?: boolean;
  isForgot?: boolean;
}
