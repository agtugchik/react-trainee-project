import React from 'react';
import { cleanup, render, waitFor } from '@testing-library/react';
import { LikeButton } from './LikeButton';
import userEvent from '@testing-library/user-event';

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

describe('LikeButton component', () => {
  afterEach(cleanup);

  it('should work correct', () => {
    const { container } = render(<LikeButton photo={mockedPhoto} />);
    const button = container.querySelector('button') as Element;
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-blue-700');
    userEvent.click(button);
    waitFor(() => expect(button).not.toHaveClass('bg-blue-700'));
  });
});
