import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { BaseForm } from '../../../types/sign-in-up-form';
import { signInText, signUpText, SubmitButton } from './SubmitButton';
import { MemoryRouter } from 'react-router-dom';
import AppPaths from 'constants/app-paths';

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
      <MemoryRouter initialEntries={[AppPaths.AUTH]} initialIndex={0}>
        <TestButton />
      </MemoryRouter>
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
      <MemoryRouter initialEntries={[AppPaths.SIGNUP]} initialIndex={0}>
        <TestButton />
      </MemoryRouter>
    );

    waitFor(() => {
      const button = getByText(signUpText).closest('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('type', 'submit');
      expect(button).toHaveAttribute('disabled');
    });
  });
});
