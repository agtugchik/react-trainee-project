import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { AuthPage, signInPageTitle, signUpPageTitle } from './AuthPage';
import { MemoryRouter } from 'react-router-dom';
import AppPaths from 'constants/app-paths';

const { getByText } = screen;

describe('ImagePage component', () => {
  afterEach(cleanup);

  it('Should render /auth with wright title', () => {
    render(
      <MemoryRouter initialEntries={[AppPaths.AUTH]} initialIndex={0}>
        <AuthPage />
      </MemoryRouter>
    );
    expect(getByText(signInPageTitle)).toBeInTheDocument();
  });

  it('Should render /auth with wright title', () => {
    render(
      <MemoryRouter initialEntries={[AppPaths.SIGNUP]} initialIndex={0}>
        <AuthPage />
      </MemoryRouter>
    );
    expect(getByText(signUpPageTitle)).toBeInTheDocument();
  });
});
