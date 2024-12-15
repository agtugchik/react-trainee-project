import React from 'react';
import { render, cleanup, waitFor, fireEvent, screen } from '@testing-library/react';
import { App } from '../app';
import { BrowserRouter } from 'react-router-dom';

const { getByRole, getByText, getByLabelText } = screen;

const signInTitle = 'Sign in to your account';
const signInButtonTitle = /^Sign in$/i;
const signUpTitle = 'Sign up your account';
const signUpButtonTitle = /^Sign up$/i;
const toSignUpTitle = /^Create now$/i;
const toSignInTitle = /^Log In$/i;
const emailInputLabel = /^Email address$/i;
const passwordInputLabel = /^Password$/i;
const confirmInputLabel = /^Confirm Password$/i;
const emailInputName = 'email';
const passwordInputName = 'password';
const confirmInputName = 'confirm_password';
const notValidEmail = 'agtugchik13@gmail';
const notValidPassword = '1Artu';
const validEmail = 'agtugchik13@gmail.com';
const validPassword = '1Artur';
const emailInputError = 'You have to pass correct email adress';
const passwordInputError = 'At least one big, one small letter and one nember, 6-15 symbols';
const confirmInputError = 'Must match with password';
const mainPageTitle = 'MainPage';

describe('App component', () => {
  beforeEach(async () => {
    await waitFor(() =>
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
    );
  });

  afterEach(cleanup);

  it('Google button should be in the document', async () => {
    await waitFor(() => {
      expect(getByRole('google')).toBeInTheDocument();
    });
  });

  it('Should work redirect', async () => {
    await waitFor(() => {
      expect(getByText(toSignUpTitle)).toBeInTheDocument();
    });
    const toSignUpButton = getByText(toSignUpTitle).closest('span');
    fireEvent.click(toSignUpButton);
    await waitFor(() => {
      expect(getByText(signUpTitle)).toBeInTheDocument();
    });

    const toSignInButton = getByText(toSignInTitle).closest('span');

    fireEvent.click(toSignInButton);
    await waitFor(() => {
      expect(getByText(signInTitle)).toBeInTheDocument();
    });
  });

  it('Should work input validation', async () => {
    await waitFor(() => {
      expect(getByText(signInTitle)).toBeInTheDocument();
    });

    const signInButton = getByText(signInButtonTitle).closest('button');
    const emailInput = getByLabelText(emailInputLabel);
    const passwordInput = getByLabelText(passwordInputLabel);
    fireEvent.change(emailInput, { target: { value: notValidEmail } });
    fireEvent.change(passwordInput, { target: { value: notValidPassword } });
    await waitFor(() => {
      expect(getByText(emailInputError)).toBeInTheDocument();
      expect(getByText(passwordInputError)).toBeInTheDocument();
      expect(signInButton).toHaveAttribute('disabled');
    });

    fireEvent.change(emailInput, { target: { value: validEmail } });
    fireEvent.change(passwordInput, { target: { value: validPassword } });
    await waitFor(() => {
      expect(emailInput.value).toMatch(validEmail);
      expect(passwordInput.value).toMatch(validPassword);
      expect(signInButton).not.toHaveAttribute('disabled');
    });
  });

  it('Auth flow should work correct', async () => {
    await waitFor(() => {
      expect(getByText(signInTitle)).toBeInTheDocument();
    });
    let signInButton = getByText(signInButtonTitle).closest('button');
    const toSignUpButton = getByText(toSignUpTitle).closest('span');
    expect(signInButton).toHaveAttribute('disabled');

    fireEvent.click(toSignUpButton);
    await waitFor(() => {
      expect(getByText(signUpTitle)).toBeInTheDocument();
    });

    let emailInput = getByLabelText(emailInputLabel);
    let passwordInput = getByLabelText(passwordInputLabel);
    const confirmInput = getByLabelText(confirmInputLabel);
    const signUpButton = getByText(signUpButtonTitle).closest('button');
    expect(signUpButton).toHaveAttribute('disabled');
    expect(emailInput.getAttribute('name')).toBe(emailInputName);
    expect(passwordInput.getAttribute('name')).toBe(passwordInputName);
    expect(confirmInput.getAttribute('name')).toBe(confirmInputName);

    fireEvent.change(emailInput, { target: { value: notValidEmail } });
    fireEvent.change(passwordInput, { target: { value: notValidPassword } });
    fireEvent.change(confirmInput, { target: { value: validPassword } });
    await waitFor(() => {
      expect(getByText(emailInputError)).toBeInTheDocument();
      expect(getByText(passwordInputError)).toBeInTheDocument();
      expect(getByText(confirmInputError)).toBeInTheDocument();
    });

    fireEvent.change(emailInput, { target: { value: validEmail } });
    fireEvent.change(passwordInput, { target: { value: validPassword } });
    fireEvent.change(confirmInput, { target: { value: validPassword } });
    await waitFor(() => {
      expect(emailInput.value).toMatch(validEmail);
      expect(passwordInput.value).toMatch(validPassword);
      expect(confirmInput.value).toMatch(validPassword);
      expect(signUpButton).not.toHaveAttribute('disabled');
    });

    fireEvent.click(signUpButton);
    await waitFor(() => {
      expect(getByText(signInTitle)).toBeInTheDocument();
    });

    emailInput = getByLabelText(emailInputLabel);
    passwordInput = getByLabelText(passwordInputLabel);
    signInButton = getByText(signInButtonTitle).closest('button');
    fireEvent.change(emailInput, { target: { value: validEmail } });
    fireEvent.change(passwordInput, { target: { value: validPassword } });
    await waitFor(() => {
      expect(emailInput.value).toMatch(validEmail);
      expect(passwordInput.value).toMatch(validPassword);
      expect(signInButton).not.toHaveAttribute('disabled');
    });

    fireEvent.click(signInButton);
    await waitFor(() => {
      expect(getByText(mainPageTitle)).toBeInTheDocument();
    });
  });
});
