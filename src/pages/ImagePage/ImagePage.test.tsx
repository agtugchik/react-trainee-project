import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { ImagePage, pageTitle } from './ImagePage';

const { getByText } = screen;

describe('ImagePage component', () => {
  beforeEach(() => {
    render(<ImagePage />);
  });
  afterEach(cleanup);

  it('Should be valid title', () => {
    expect(getByText(pageTitle)).toBeInTheDocument();
  });
});
