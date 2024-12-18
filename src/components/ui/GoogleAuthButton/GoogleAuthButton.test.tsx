import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { GoogleAuthButton } from './GoogleAuthButton';
import { AuthProvider } from 'context/';

const { getByRole, debug } = screen;

describe('GoogleAuthButton component', () => {
  afterEach(cleanup);

  it('should throw error', () => {
    render(
      <AuthProvider>
        <GoogleAuthButton />
      </AuthProvider>
    );

    const googleAuthButtonContainer = getByRole('google');
    expect(googleAuthButtonContainer).toBeInTheDocument();
    const googleAuthDiv = googleAuthButtonContainer.getElementsByTagName('div')[0];
    expect(googleAuthDiv).toBeInTheDocument();
    expect(googleAuthDiv).toHaveAttribute('style', 'height: 40px;');
    debug();
  });
});
