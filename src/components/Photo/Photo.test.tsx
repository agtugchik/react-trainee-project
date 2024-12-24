import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { Photo } from './Photo';

const { getByAltText } = screen;

describe('Photo component', () => {
  afterEach(cleanup);

  const mockedPhoto = {
    id: 1,
    description: 'someTitle',
    isLiked: true,
    urls: {
      raw: 'somePhoto',
      full: 'somePhoto',
      regular: 'somePhoto',
      small: 'somePhoto',
      thumb: 'somePhoto',
    },
  };

  it('should render image with wright props', () => {
    render(<Photo photo={mockedPhoto} />);
    const testImg = getByAltText(mockedPhoto.description);
    expect(testImg).toBeInTheDocument();
    expect(testImg).toHaveAttribute('src', mockedPhoto.urls.small);
  });
});
