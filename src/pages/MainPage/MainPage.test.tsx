import React from 'react';
import { cleanup, render, waitFor } from '@testing-library/react';
import { MainPage } from 'pages/MainPage';
import { QueryProvider, SearchParamsProvider } from 'context/';
import 'intersection-observer';
import userEvent from '@testing-library/user-event';

const jsonMock = {
  results: [
    {
      id: '1xzSeJRJEDI',
      description: 'a grassy field with trees in the background',
      urls: {
        raw: '',
        full: '',
        regular: '',
        small: '',
        thumb: '',
        small_s3: '',
      },
    },
    {
      id: 'ryQ-GmDsHhE',
      description: '100 us dollar bill',
      urls: {
        raw: '',
        full: '',
        regular: '',
        small: '',
        thumb: '',
        small_s3: '',
      },
    },
    {
      id: 'ucvkbYo7VAw',
      description: 'time lapse photography of vehicles passing on roads',
      urls: {
        raw: '',
        full: '',
        regular: '',
        small: '',
        thumb: '',
        small_s3: '',
      },
    },
  ],
};

describe('MainPage component', () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(jsonMock),
      })
    ) as jest.Mock;
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
