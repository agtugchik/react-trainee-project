import React from 'react';
import { EmailInput } from 'components/ui/email-input';
import { PasswordInput } from 'components/ui/password-input';
import { SubmitButton } from 'components/ui/submit-button';
import { SubmitHandler, useForm } from 'react-hook-form';
import Users from 'constants/db';
import AppPaths from 'constants/app-paths';
import { useNavigate } from 'react-router-dom';

interface IForm {
  email: string;
  password: string;
  confirm_password: string;
}

export const SignUpForm = () => {
  const navigate = useNavigate();
  const form = useForm<IForm>({
    defaultValues: {
      email: '',
      password: '',
      confirm_password: '',
    },
    mode: 'onChange',
  });

  const { handleSubmit } = form;

  const submit: SubmitHandler<IForm> = (data) => {
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
      <PasswordInput isConfirm={true} form={form} />
      <SubmitButton form={form} />
    </form>
  );
};
