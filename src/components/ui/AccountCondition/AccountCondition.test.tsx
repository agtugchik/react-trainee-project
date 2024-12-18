import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('should work redirect', async () => {
    render(
      <PathRouter path={AppPaths.AUTH}>
        <AccountCondition />
      </PathRouter>
    );

    expect(getByText(authText.trim())).toBeInTheDocument();
    const authLinkNode = getByText(authLinkText).closest('span');
    expect(authLinkNode).toBeInTheDocument();

    userEvent.click(authLinkNode as Element);

    await waitFor(() => {
      expect(getByText(signUpText.trim())).toBeInTheDocument();
    });
    const signUpLinkNode = getByText(signUpLinkText);
    expect(signUpLinkNode).toBeInTheDocument();

    userEvent.click(signUpLinkNode as Element);
    waitFor(() => {
      expect(getByText(authText.trim())).toBeInTheDocument();
      expect(getByText(authLinkText)).toBeInTheDocument();
    });
  });
});
