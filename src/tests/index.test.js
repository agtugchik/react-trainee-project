import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import { App } from '../components/app';

describe('App component', () => {
  beforeAll(() => {
    render(<App />);
  });

  it('should have the right message in the dom', () => {
    const message = 'react-trainee-project';

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  afterAll(cleanup);
});
