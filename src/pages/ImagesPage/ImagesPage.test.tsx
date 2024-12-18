import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { ImagesPage, pageTitle } from './ImagesPage';

const { getByText } = screen;

describe('ImagesPage component', () => {
  beforeEach(() => {
    render(<ImagesPage />);
  });
  afterEach(cleanup);

  it('Should be valid title', () => {
    expect(getByText(pageTitle)).toBeInTheDocument();
  });
});
