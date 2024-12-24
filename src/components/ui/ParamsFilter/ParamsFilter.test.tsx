import React from 'react';
import { cleanup, render, waitFor, screen } from '@testing-library/react';
import { SearchParamsProvider } from 'context/';
import userEvent from '@testing-library/user-event';
import { ParamsFilter } from './ParamsFilter';
import { placeholderText } from 'components/ui/SearchInput';
import {
  colorValues,
  contentFilterValues,
  orderByValues,
  orientationValues,
} from 'constants/query-filters';

const {} = screen;
const searchValue = 'some text';

describe('ParamsFilter component', () => {
  afterEach(cleanup);

  it('Form should work correct', async () => {
    const { container, getByPlaceholderText } = render(
      <SearchParamsProvider>
        <ParamsFilter />
      </SearchParamsProvider>
    );

    const searchInput = getByPlaceholderText(placeholderText) as HTMLInputElement;
    expect(searchInput).toBeInTheDocument();
    expect(searchInput.value).toEqual('');
    userEvent.type(searchInput, searchValue);
    await waitFor(() => expect(searchInput.value).toEqual(searchValue));

    const selectOrder = container.querySelector(
      `select[name='${orderByValues.name}']`
    ) as HTMLSelectElement;
    expect(selectOrder).toBeInTheDocument();
    userEvent.selectOptions(selectOrder, orderByValues.options.Latest);
    waitFor(() => expect(selectOrder).toHaveValue(orderByValues.options.Latest));

    const selectContentFilter = container.querySelector(
      `select[name='${contentFilterValues.name}']`
    ) as HTMLSelectElement;
    expect(selectOrder).toBeInTheDocument();
    userEvent.selectOptions(selectContentFilter, contentFilterValues.options.High);
    waitFor(() => expect(selectContentFilter).toHaveValue(contentFilterValues.options.High));

    const selectColor = container.querySelector(
      `select[name='${colorValues.name}']`
    ) as HTMLSelectElement;
    expect(selectOrder).toBeInTheDocument();
    userEvent.selectOptions(selectColor, colorValues.options.Red);
    waitFor(() => expect(selectColor).toHaveValue(colorValues.options.Red));

    const selectOrientation = container.querySelector(
      `select[name='${orientationValues.name}']`
    ) as HTMLSelectElement;
    expect(selectOrder).toBeInTheDocument();
    userEvent.selectOptions(selectOrientation, orientationValues.options.Portrait);
    waitFor(() => expect(selectOrientation).toHaveValue(orientationValues.options.Portrait));
  });
});
