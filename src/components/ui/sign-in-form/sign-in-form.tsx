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

interface IForm {
  email: string;
  password: string;
  remember: boolean;
}

export const SignInForm = () => {
  const navigate = useNavigate();
  const { isAuth, handleAuth } = useAuth();
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
    const isCorrectUser =
      Users.find((user) => user.email === data.email)?.password === data.password;
    if (isCorrectUser) {
      handleAuth(data.remember);
    }
  };

  useEffect(() => {
    if (isAuth) navigate(AppPaths.MAIN);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <form className="space-y-6" onSubmit={handleSubmit(submit)}>
      <EmailInput form={form} />
      <PasswordInput isForgot={true} form={form} />
      <RememberCheckbox form={form} />
      <SubmitButton form={form} />
    </form>
  );
};
