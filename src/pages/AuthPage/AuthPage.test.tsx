import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { AuthPage, signInPageTitle, signUpPageTitle } from 'pages/AuthPage';

import AppPaths from 'constants/app-paths';
import PathRouter from 'helpers/PathRouter';

const { getByText } = screen;

describe('ImagePage component', () => {
  afterEach(cleanup);

  it('Should render /auth with wright title', () => {
    render(
      <PathRouter path={AppPaths.AUTH}>
        <AuthPage />
      </PathRouter>
    );
    expect(getByText(signInPageTitle)).toBeInTheDocument();
  });

  it('Should render /auth with wright title', () => {
    render(
      <PathRouter path={AppPaths.SIGNUP}>
        <AuthPage />
      </PathRouter>
    );
    expect(getByText(signUpPageTitle)).toBeInTheDocument();
  });
});
