import React from 'react';
import { SearchInput } from 'components/ui/SearchInput';
import { Select } from 'components/ui/Select';
import {
  ColorValues,
  ContentFilterValues,
  OrderByValues,
  OrientationValues,
} from 'constants/query-filters';
import { useSearchParams } from 'context/';

export const ParamsFilter = () => {
  const { changeParamValues } = useSearchParams();
  return (
    <form
      className="max-w-md mx-auto"
      onChange={(e) => {
        const name = (e.target as HTMLInputElement).name;
        const value = (e.target as HTMLInputElement).value;
        changeParamValues(name, value);
      }}
    >
      <SearchInput />
      <Select optionValues={OrderByValues} />
      <Select optionValues={ContentFilterValues} />
      <Select optionValues={ColorValues} />
      <Select optionValues={OrientationValues} />
    </form>
  );
};
