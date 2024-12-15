import React from 'react';
import { render, cleanup, waitFor, fireEvent } from '@testing-library/react';
import { App } from '../app';
import { BrowserRouter } from 'react-router-dom';

describe('App component', () => {
  afterAll(cleanup);

  it('Auth flow', async () => {
    const { getByText, getByLabelText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(getByText(/Sign in to your account/i)).toBeInTheDocument();
    });

    const signInButton = getByText(/^Sign in$/i).closest('button');
    const createAccountButton = getByText(/^Create now$/i).closest('span');

    expect(signInButton).toHaveAttribute('disabled');
    fireEvent.click(createAccountButton);

    await waitFor(() => {
      expect(getByText(/Sign up your account/i)).toBeInTheDocument();
    });

    const email = getByLabelText(/^Email address$/i, { selector: 'input' });
    const password = getByLabelText(/^Password$/i, { selector: 'input' });
    const confirm = getByLabelText(/^Confirm Password$/i, { selector: 'input' });
    const signUpButton = getByText(/^Sign up$/i).closest('button');

    expect(signUpButton).toHaveAttribute('disabled');

    expect(email.getAttribute('name')).toBe('email');
    expect(password.getAttribute('name')).toBe('password');
    expect(confirm.getAttribute('name')).toBe('confirm_password');

    fireEvent.change(email, { target: { value: 'agtugchik13@gmail' } });
    fireEvent.change(password, { target: { value: '1Artu' } });
    fireEvent.change(confirm, { target: { value: '1Artur' } });
    await waitFor(() => {
      expect(getByText(/You have to pass correct email adress/i)).toBeInTheDocument();
      expect(
        getByText(/At least one big, one small letter and one nember, 6-15 symbols/i)
      ).toBeInTheDocument();
      expect(getByText(/Must match with password/i)).toBeInTheDocument();
    });

    fireEvent.change(email, { target: { value: 'agtugchik13@gmail.com' } });
    fireEvent.change(password, { target: { value: '1Artur' } });
    fireEvent.change(confirm, { target: { value: '1Artur' } });
    await waitFor(() => {
      expect(email.value).toMatch('agtugchik13@gmail.com');
      expect(password.value).toMatch('1Artur');
      expect(confirm.value).toMatch('1Artur');
      expect(signUpButton).not.toHaveAttribute('disabled');
    });
    fireEvent.click(signUpButton);
    await waitFor(() => {
      expect(getByText(/Sign in to your account/i)).toBeInTheDocument();
    });

    const emailLogIn = getByLabelText(/^Email address$/i, { selector: 'input' });
    const passwordLogIn = getByLabelText(/^Password$/i, { selector: 'input' });
    const newSignInButton = getByText(/^Sign in$/i).closest('button');

    fireEvent.change(emailLogIn, { target: { value: 'agtugchik13@gmail.com' } });
    fireEvent.change(passwordLogIn, { target: { value: '1Artur' } });
    await waitFor(() => {
      expect(emailLogIn.value).toMatch('agtugchik13@gmail.com');
      expect(passwordLogIn.value).toMatch('1Artur');
      expect(newSignInButton).not.toHaveAttribute('disabled');
    });

    fireEvent.click(newSignInButton);
    await waitFor(() => {
      expect(getByText(/MainPage/i)).toBeInTheDocument();
    });
  });
});
