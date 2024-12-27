import React from 'react';
import { cleanup, render, waitFor } from '@testing-library/react';
import { LikeButton } from './LikeButton';
import userEvent from '@testing-library/user-event';
import { unsplashMockedPhoto } from '__mocks__/api-mocks';

describe('LikeButton component', () => {
  afterEach(cleanup);

  it('should work correct', () => {
    const { container } = render(<LikeButton photo={unsplashMockedPhoto} />);
    const button = container.querySelector('button') as Element;
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-blue-700');
    userEvent.click(button);
    waitFor(() => expect(button).not.toHaveClass('bg-blue-700'));
  });
});
