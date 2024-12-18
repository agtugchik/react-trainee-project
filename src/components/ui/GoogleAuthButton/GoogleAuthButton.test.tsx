import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { GoogleAuthButton } from './GoogleAuthButton';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from 'context/';

const { getByRole, debug } = screen;

describe('GoogleAuthButton component', () => {
  afterEach(cleanup);

  it('should throw error', () => {
    render(
      <GoogleOAuthProvider clientId="">
        <AuthProvider>
          <GoogleAuthButton />
        </AuthProvider>
      </GoogleOAuthProvider>
    );

    const googleAuthButtonContainer = getByRole('google');
    expect(googleAuthButtonContainer).toBeInTheDocument();
    const googleAuthDiv = googleAuthButtonContainer.getElementsByTagName('div')[0];
    expect(googleAuthDiv).toBeInTheDocument();
    expect(googleAuthDiv).toHaveAttribute('style', 'height: 40px;');
    debug();
  });
});
