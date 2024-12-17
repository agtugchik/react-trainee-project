import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import AppPaths from 'constants/app-paths';
import {
  AccountCondition,
  authLinkText,
  authText,
  signUpLinkText,
  signUpText,
} from './AccountCondition';
import { MemoryRouter } from 'react-router-dom';

const { getByText } = screen;

describe('AccountCondition component', () => {
  afterEach(cleanup);

  it('/auth route render', () => {
    render(
      <MemoryRouter initialEntries={[AppPaths.AUTH]} initialIndex={0}>
        <AccountCondition />
      </MemoryRouter>
    );

    expect(getByText(authText.trim())).toBeInTheDocument();
    expect(getByText(authLinkText)).toBeInTheDocument();
  });

  it('/auth/sign-up route render', () => {
    render(
      <MemoryRouter initialEntries={[AppPaths.SIGNUP]} initialIndex={0}>
        <AccountCondition />
      </MemoryRouter>
    );

    expect(getByText(signUpText.trim())).toBeInTheDocument();
    expect(getByText(signUpLinkText)).toBeInTheDocument();
  });

  it('should work redirect', () => {
    render(
      <MemoryRouter initialEntries={[AppPaths.AUTH]} initialIndex={0}>
        <AccountCondition />
      </MemoryRouter>
    );

    expect(getByText(authText.trim())).toBeInTheDocument();
    const authLinkNode = getByText(authLinkText).closest('span');
    expect(authLinkNode).toBeInTheDocument();

    fireEvent.click(authLinkNode as Element);
    expect(getByText(signUpText.trim())).toBeInTheDocument();
    const signUpLinkNode = getByText(signUpLinkText);
    expect(signUpLinkNode).toBeInTheDocument();

    fireEvent.click(signUpLinkNode as Element);
    expect(getByText(authText.trim())).toBeInTheDocument();
    expect(getByText(authLinkText)).toBeInTheDocument();
  });
});
