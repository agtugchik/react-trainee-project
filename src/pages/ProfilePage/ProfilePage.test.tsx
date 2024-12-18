import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { ProfilePage, pageTitle } from 'pages/ProfilePage';

const { getByText } = screen;

describe('ProfilePage component', () => {
  beforeEach(() => {
    render(<ProfilePage />);
  });
  afterEach(cleanup);

  it('Should be valid title', () => {
    expect(getByText(pageTitle)).toBeInTheDocument();
  });
});
