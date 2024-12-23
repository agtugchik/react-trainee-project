import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { placeholderText, SearchInput } from './SearchInput';
import { SearchParamsProvider } from 'context/';
import userEvent from '@testing-library/user-event';

const { getByPlaceholderText } = screen;
const searchValue = 'some text';

describe('SearchInput component', () => {
  afterEach(cleanup);

  it('Should change value', () => {
    render(
      <SearchParamsProvider>
        <SearchInput />
      </SearchParamsProvider>
    );
    const searchInput: HTMLInputElement = getByPlaceholderText(placeholderText);
    expect(searchInput).toBeInTheDocument();
    expect(searchInput.value).toEqual('');
    userEvent.type(searchInput, searchValue);
    waitFor(() => expect(searchInput.value).toEqual(searchValue));
  });
});
