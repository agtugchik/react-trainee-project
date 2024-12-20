import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { Photo } from './Photo';

const { getByAltText } = screen;

describe('Photo component', () => {
  afterEach(cleanup);

  const mockedPhoto = {
    id: 1,
    title: 'someTitle',
    isLiked: true,
    cover_photo: {
      urls: {
        raw: 'somePhoto',
        full: 'somePhoto',
        regular: 'somePhoto',
        small: 'somePhoto',
        thumb: 'somePhoto',
      },
    },
  };

  it('should render image with wright props', () => {
    render(<Photo photo={mockedPhoto} />);
    const testImg = getByAltText(mockedPhoto.title);
    expect(testImg).toBeInTheDocument();
    expect(testImg).toHaveAttribute('src', mockedPhoto.cover_photo.urls.small);
  });
});
