import React from 'react';
import { EmailInput } from 'components/ui/email-input';
import { PasswordInput } from 'components/ui/password-input';
import { RememberCheckbox } from 'components/ui/remember-checkbox';
import { SubmitButton } from 'components/ui/submit-button';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IForm {
  email: string;
  password: string;
  remember: boolean;
}

export const SignInForm = () => {
  const form = useForm<IForm>({
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    mode: 'onChange',
  });
  const { handleSubmit } = form;

  const submit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(submit)}>
      <EmailInput form={form} />
      <PasswordInput isForgot={true} form={form} />
      <RememberCheckbox form={form} />
      <SubmitButton form={form} />
    </form>
  );
};
