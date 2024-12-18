import React from 'react';
import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SignInForm } from './SignInForm';
import { AuthProvider } from 'context/';
import { signInText as signInButtonTitle } from '../SubmitButton';
import { emailInputLabelText } from '../EmailInput';
import { passwordInputLabel } from '../PasswordInput';
import { errors } from '../InputValidationError/InputValidationError';
import AppPaths from 'constants/app-paths';
import { rememberLabel } from '../RememberCheckbox';
import PathRouter from 'helpers/PathRouter';

const { getByRole, getByText, getByLabelText } = screen;
const notValidEmail = '123';
const validEmail = '1Artur@mail.ru';
const notValidPassword = '1';
const validPassword = '1Artur';

describe('SignInForm component', () => {
  beforeEach(() => {
    render(
      <PathRouter path={AppPaths.AUTH}>
        <AuthProvider>
          <SignInForm />
        </AuthProvider>
      </PathRouter>
    );
  });
  afterEach(cleanup);

  it('Google button should be in the document', () => {
    expect(getByRole('google')).toBeInTheDocument();
  });

  it('Should work form validation', () => {
    const signInButton = getByText(signInButtonTitle).closest('button');
    const emailInput = getByLabelText(emailInputLabelText) as HTMLInputElement;
    const passwordInput = getByLabelText(passwordInputLabel) as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: notValidEmail } });
    fireEvent.change(passwordInput, { target: { value: notValidPassword } });
    waitFor(() => {
      expect(getByText(errors.email)).toBeInTheDocument();
      expect(getByText(errors.password)).toBeInTheDocument();
      expect(signInButton).toHaveAttribute('disabled');
    });

    fireEvent.change(emailInput, { target: { value: validEmail } });
    fireEvent.change(passwordInput, { target: { value: validPassword } });
    waitFor(() => {
      expect(emailInput.value).toMatch(validEmail);
      expect(passwordInput.value).toMatch(validPassword);
      expect(signInButton).not.toHaveAttribute('disabled');
    });
  });

  it('Checkbox should be in the document', () => {
    const checkboxInputNode = getByLabelText(rememberLabel);
    expect(checkboxInputNode).toBeInTheDocument();
    expect(checkboxInputNode).toHaveAttribute('type', 'checkbox');
  });
});
