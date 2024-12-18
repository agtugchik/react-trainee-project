import React from 'react';
import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AuthProvider } from 'context/';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { signUpText as signUpButtonTitle } from '../SubmitButton';
import { emailInputLabelText } from '../EmailInput';
import { passwordConfirmInputLabel, passwordInputLabel } from '../PasswordInput';
import { errors } from '../InputValidationError/InputValidationError';
import AppPaths from 'constants/app-paths';
import { SignUpForm } from './SignUpForm';
import PathRouter from 'helpers/PathRouter';

const { getByText, getByLabelText } = screen;
const notValidEmail = '123';
const validEmail = '1Artur@mail.ru';
const notValidPassword = '1';
const validPassword = '1Artur';

describe('SignUpForm component', () => {
  beforeEach(() => {
    render(
      <PathRouter path={AppPaths.SIGNUP}>
        <AuthProvider>
          <GoogleOAuthProvider clientId="">
            <SignUpForm />
          </GoogleOAuthProvider>
        </AuthProvider>
      </PathRouter>
    );
  });
  afterEach(cleanup);

  it('Should work form validation', () => {
    const signInButton = getByText(signUpButtonTitle).closest('button');
    const emailInput = getByLabelText(emailInputLabelText) as HTMLInputElement;
    const passwordInput = getByLabelText(passwordInputLabel) as HTMLInputElement;
    const passwordConfirmInput = getByLabelText(passwordConfirmInputLabel) as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: notValidEmail } });
    fireEvent.change(passwordInput, { target: { value: notValidPassword } });
    fireEvent.change(passwordConfirmInput, { target: { value: validPassword } });
    waitFor(() => {
      expect(getByText(errors.email)).toBeInTheDocument();
      expect(getByText(errors.password)).toBeInTheDocument();
      expect(getByText(errors.confirm_password)).toBeInTheDocument();
      expect(signInButton).toHaveAttribute('disabled');
    });

    fireEvent.change(emailInput, { target: { value: validEmail } });
    fireEvent.change(passwordInput, { target: { value: validPassword } });
    fireEvent.change(passwordConfirmInput, { target: { value: validPassword } });
    waitFor(() => {
      expect(getByText(errors.email)).not.toBeInTheDocument();
      expect(getByText(errors.password)).not.toBeInTheDocument();
      expect(getByText(errors.confirm_password)).not.toBeInTheDocument();
      expect(signInButton).not.toHaveAttribute('disabled');
    });
  });
});
