import React, { useEffect } from 'react';
import { EmailInput } from 'components/ui/email-input';
import { PasswordInput } from 'components/ui/password-input';
import { RememberCheckbox } from 'components/ui/remember-checkbox';
import { SubmitButton } from 'components/ui/submit-button';
import { SubmitHandler, useForm } from 'react-hook-form';
import Users from 'constants/db';
import { useAuth } from 'context';
import { useNavigate } from 'react-router-dom';
import AppPaths from 'constants/app-paths';
import { GoogleAuthButton } from '../google-auth-button';
import { BaseForm } from 'types/sign-in-up-form';

export const SignInForm = () => {
  const navigate = useNavigate();
  const { isAuth, handleAuth } = useAuth();
  const form = useForm<BaseForm>({
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    mode: 'onChange',
  });
  const { handleSubmit } = form;

  const submit: SubmitHandler<BaseForm> = (data) => {
    const isCorrectUser =
      Users.find((user) => user.email === data.email)?.password === data.password;
    if (isCorrectUser) {
      handleAuth(data.remember as boolean);
    }
  };

  useEffect(() => {
    if (isAuth) navigate(AppPaths.MAIN);
  }, [isAuth]);

  return (
    <form className="space-y-6" onSubmit={handleSubmit(submit)}>
      <EmailInput form={form} />
      <PasswordInput isForgot form={form} />
      <RememberCheckbox form={form} />
      <SubmitButton form={form} />
      <GoogleAuthButton />
    </form>
  );
};
