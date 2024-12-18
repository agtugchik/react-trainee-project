import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { BaseForm } from 'types/sign-in-up-form';
import { signInText, signUpText, SubmitButton } from 'components/ui/SubmitButton';
import AppPaths from 'constants/app-paths';
import PathRouter from 'helpers/PathRouter';

const { getByText } = screen;

describe('SubmitButton component', () => {
  afterEach(cleanup);
  const TestButton = () => {
    const form = useForm<BaseForm>({
      defaultValues: {
        email: '',
        password: '',
      },
      mode: 'onChange',
    });

    return <SubmitButton form={form} />;
  };

  it('/auth route render', () => {
    render(
      <PathRouter path={AppPaths.AUTH}>
        <TestButton />
      </PathRouter>
    );

    waitFor(() => {
      const button = getByText(signInText).closest('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('type', 'submit');
      expect(button).toHaveAttribute('disabled');
    });
  });

  it('/auth/sign-up route render', () => {
    render(
      <PathRouter path={AppPaths.SIGNUP}>
        <TestButton />
      </PathRouter>
    );

    waitFor(() => {
      const button = getByText(signUpText).closest('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('type', 'submit');
      expect(button).toHaveAttribute('disabled');
    });
  });
});
