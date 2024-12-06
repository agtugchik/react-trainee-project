import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import { App } from 'components/app';
import { BrowserRouter } from 'react-router-dom';

describe('App component', () => {
  beforeAll(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  it('should have the right message in the dom', () => {
    const message = 'react-trainee-project';

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  afterAll(cleanup);
});
