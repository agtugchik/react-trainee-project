import React from 'react';
import { SearchInput } from 'components/ui/SearchInput';
import { Select } from 'components/ui/Select';
import {
  ColorValues,
  ContentFilterValues,
  OrderByValues,
  OrientationValues,
} from 'constants/query-filters';

export const ParamsFilter = () => (
  <form
    className="max-w-md mx-auto"
    onChange={(e) => console.log((e.target as HTMLInputElement).value)}
  >
    <SearchInput />
    <Select optionValues={OrderByValues} />
    <Select optionValues={ContentFilterValues} />
    <Select optionValues={ColorValues} />
    <Select optionValues={OrientationValues} />
  </form>
);
