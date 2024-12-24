import React from 'react';
import { cleanup, render, waitFor } from '@testing-library/react';
import { MainPage } from 'pages/MainPage';
import { QueryProvider, SearchParamsProvider } from 'context/';
import 'intersection-observer';
import userEvent from '@testing-library/user-event';
import { fetchMock, unsplashJsonMock } from '__mocks__/api-mocks';

describe('MainPage component', () => {
  beforeAll(() => {
    fetchMock(unsplashJsonMock);
  });

  afterEach(cleanup);

  it('Api fetching should work', async () => {
    const { container } = render(
      <QueryProvider>
        <SearchParamsProvider>
          <MainPage />
        </SearchParamsProvider>
      </QueryProvider>
    );

    await waitFor(() => {
      const img = container.querySelector('img');
      expect(img).toBeInTheDocument();
      const button = (img as HTMLImageElement).parentNode?.querySelector('button');
      expect(button).toBeInTheDocument();
      waitFor(() => expect(button).not.toHaveClass('bg-blue-700'));
      userEvent.click(button as HTMLButtonElement);
      expect(button).toHaveClass('bg-blue-700');
    });
  });
});
