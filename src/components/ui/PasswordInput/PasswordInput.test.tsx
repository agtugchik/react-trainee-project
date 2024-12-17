import React from 'react';
import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { BaseForm } from '../../../types/sign-in-up-form';
import { errors } from '../InputValidationError/InputValidationError';
import {
  forgotText,
  passwordConfirmInputLabel,
  PasswordInput,
  passwordInputLabel,
} from './PasswordInput';

const { getByLabelText, getByText } = screen;
const notValidPassword = '123';
const validPassword = '1Artur';

describe('PasswordInput component', () => {
  afterEach(cleanup);
  const TestInput = ({ isConfirm, isForgot }: { isConfirm?: boolean; isForgot?: boolean }) => {
    const form = useForm<BaseForm>({
      defaultValues: {
        email: '',
        password: '',
        confirm_password: '',
      },
      mode: 'onChange',
    });

    return <PasswordInput form={form} isConfirm={isConfirm} isForgot={isForgot} />;
  };

  it('should throw password error', () => {
    render(<TestInput />);
    const passwordInputNode = getByLabelText(passwordInputLabel);
    fireEvent.change(passwordInputNode, { target: { value: notValidPassword } });
    waitFor(() => expect(getByText(errors.password)).toBeInTheDocument());
  });

  it("shouldn't throw password error", () => {
    render(<TestInput />);
    const passwordInputNode = getByLabelText(passwordInputLabel);
    fireEvent.change(passwordInputNode, { target: { value: validPassword } });
    waitFor(() => expect(getByText(errors.password)).not.toBeInTheDocument());
  });

  it('should throw confirm password error', () => {
    render(<TestInput isConfirm />);
    const passwordInputNode = getByLabelText(passwordConfirmInputLabel);
    fireEvent.change(passwordInputNode, { target: { value: notValidPassword } });
    waitFor(() => expect(getByText(errors.confirm_password)).toBeInTheDocument());
  });

  it("shouldn't throw confirm password error", () => {
    render(<TestInput isConfirm />);
    const passwordInputNode = getByLabelText(passwordConfirmInputLabel);
    fireEvent.change(passwordInputNode, { target: { value: validPassword } });
    waitFor(() => expect(getByText(errors.confirm_password)).not.toBeInTheDocument());
  });

  it('should contain forgot link', () => {
    render(<TestInput isForgot />);
    expect(getByText(forgotText)).toBeInTheDocument();
  });
});
