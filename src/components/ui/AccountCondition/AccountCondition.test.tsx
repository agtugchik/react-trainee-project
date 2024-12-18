import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import AppPaths from 'constants/app-paths';
import {
  AccountCondition,
  authLinkText,
  authText,
  signUpLinkText,
  signUpText,
} from 'components/ui/AccountCondition';
import PathRouter from 'helpers/PathRouter';

const { getByText } = screen;

describe('AccountCondition component', () => {
  afterEach(cleanup);

  it('/auth route render', () => {
    render(
      <PathRouter path={AppPaths.AUTH}>
        <AccountCondition />
      </PathRouter>
    );

    expect(getByText(authText.trim())).toBeInTheDocument();
    expect(getByText(authLinkText)).toBeInTheDocument();
  });

  it('/auth/sign-up route render', () => {
    render(
      <PathRouter path={AppPaths.SIGNUP}>
        <AccountCondition />
      </PathRouter>
    );

    expect(getByText(signUpText.trim())).toBeInTheDocument();
    expect(getByText(signUpLinkText)).toBeInTheDocument();
  });

  it('should work redirect', () => {
    render(
      <PathRouter path={AppPaths.AUTH}>
        <AccountCondition />
      </PathRouter>
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
