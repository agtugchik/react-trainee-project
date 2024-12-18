import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { MainPage, pageTitle } from 'pages/MainPage';

const { getByText } = screen;

describe('MainPage component', () => {
  beforeEach(() => {
    render(<MainPage />);
  });
  afterEach(cleanup);

  it('Should be valid title', () => {
    expect(getByText(pageTitle)).toBeInTheDocument();
  });
});
