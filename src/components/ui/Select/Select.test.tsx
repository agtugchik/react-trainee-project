import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { Select } from './Select';
import userEvent from '@testing-library/user-event';
import { contentFilterValues } from 'constants/query-filters';

const { getByRole } = screen;

describe('Select component', () => {
  afterEach(cleanup);

  it('Should change value', () => {
    render(<Select optionValues={contentFilterValues} />);

    const selectElement = getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    userEvent.selectOptions(selectElement, contentFilterValues.options.Low);
    waitFor(() => expect(selectElement).toHaveValue(contentFilterValues.options.Low));
  });
});
