import React, { useEffect } from 'react';
import { EmailInput } from 'components/ui/EmailInput';
import { PasswordInput } from 'components/ui/PasswordInput';
import { RememberCheckbox } from 'components/ui/RememberCheckbox';
import { SubmitButton } from 'components/ui/SubmitButton';
import { useForm } from 'react-hook-form';
import Users from 'constants/db';
import { useAuth } from 'context/';
import { useNavigate } from 'react-router-dom';
import AppPaths from 'constants/app-paths';
import { GoogleAuthButton } from '../GoogleAuthButton';
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

  const submit = (data: BaseForm) => {
    const isCorrectUser =
      Users.find((user) => user.email === data.email)?.password === data.password;
    if (isCorrectUser) {
      handleAuth(data.remember as boolean);
    }
  };

  useEffect(() => {
    if (isAuth) navigate(AppPaths.MAIN);
  }, [isAuth, navigate]);

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
