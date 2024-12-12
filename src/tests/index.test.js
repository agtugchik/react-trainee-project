import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { App } from '../app';
import { BrowserRouter } from 'react-router-dom';

describe('App component', () => {
  afterAll(cleanup);

  it('should have the right message in the dom', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(getByText(/Sign in to your account/i)).toBeInTheDocument();
    });
  });
});
