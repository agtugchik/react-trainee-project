import React from 'react';
import { EmailInput } from 'components/ui/email-input';
import { PasswordInput } from 'components/ui/password-input';
import { SubmitButton } from 'components/ui/submit-button';
import { SubmitHandler, useForm } from 'react-hook-form';
import Users from 'constants/db';
import AppPaths from 'constants/app-paths';
import { useNavigate } from 'react-router-dom';
import { BaseForm } from 'types/sign-in-up-form';

export const SignUpForm = () => {
  const navigate = useNavigate();
  const form = useForm<BaseForm>({
    defaultValues: {
      email: '',
      password: '',
      confirm_password: '',
    },
    mode: 'onChange',
  });

  const { handleSubmit } = form;

  const submit: SubmitHandler<BaseForm> = (data) => {
    const newUser: (typeof Users)[number] = {
      id: String(Users.length),
      firstName: '',
      secondName: '',
      email: data.email,
      password: data.password,
    };
    Users.push(newUser);
    navigate(AppPaths.AUTH);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(submit)}>
      <EmailInput form={form} />
      <PasswordInput form={form} />
      <PasswordInput isConfirm form={form} />
      <SubmitButton form={form} />
    </form>
  );
};
