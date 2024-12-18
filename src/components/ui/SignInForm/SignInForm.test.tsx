import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SignInForm } from 'components/ui/SignInForm';
import { AuthProvider } from 'context/';
import { signInText as signInButtonTitle } from 'components/ui/SubmitButton';
import { emailInputLabelText } from 'components/ui/EmailInput';
import { passwordInputLabel } from 'components/ui/PasswordInput';
import { errors } from 'components/ui/InputValidationError/InputValidationError';
import AppPaths from 'constants/app-paths';
import { rememberLabel } from 'components/ui/RememberCheckbox';
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
    userEvent.type(emailInput, notValidEmail);
    userEvent.type(passwordInput, notValidPassword);
    waitFor(() => {
      expect(getByText(errors.email)).toBeInTheDocument();
      expect(getByText(errors.password)).toBeInTheDocument();
      expect(signInButton).toHaveAttribute('disabled');
    });

    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, validPassword);
    waitFor(() => {
      expect(emailInput.value).toMatch(validEmail);
      expect(passwordInput.value).toMatch(validPassword);
      expect(signInButton).not.toHaveAttribute('disabled');
    });
  });

  it('Checkbox should work correct', () => {
    const checkboxInputNode = getByLabelText(rememberLabel);
    expect(checkboxInputNode).toBeInTheDocument();
    expect(checkboxInputNode).toHaveAttribute('type', 'checkbox');
    userEvent.click(checkboxInputNode as Element);
    waitFor(() => expect(checkboxInputNode).toBeChecked());
    userEvent.click(checkboxInputNode as Element);
    waitFor(() => expect(checkboxInputNode).not.toBeChecked());
  });
});
