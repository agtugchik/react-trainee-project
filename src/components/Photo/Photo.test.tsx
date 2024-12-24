import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { Photo } from './Photo';
import { unsplashMockedPhoto } from '__mocks__/api-mocks';

const { getByAltText } = screen;

describe('Photo component', () => {
  afterEach(cleanup);

  it('should render image with wright props', () => {
    render(<Photo photo={unsplashMockedPhoto} />);
    const testImg = getByAltText(unsplashMockedPhoto.description);
    expect(testImg).toBeInTheDocument();
    expect(testImg).toHaveAttribute('src', unsplashMockedPhoto.urls.small);
  });
});
