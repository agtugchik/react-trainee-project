import React from 'react';
import { SearchInput } from 'components/ui/SearchInput';
import { Select } from 'components/ui/Select';
import {
  colorValues,
  contentFilterValues,
  orderByValues,
  orientationValues,
} from 'constants/query-filters';
import { usePhotoFilter } from 'hooks/use-photo-filter';

export const ParamsFilter = () => {
  const { setPhotoFilter } = usePhotoFilter();

  return (
    <form
      className="max-w-md mx-auto"
      onChange={(e) => {
        const name = (e.target as HTMLInputElement).name;
        const value = (e.target as HTMLInputElement).value;
        setPhotoFilter(name, value);
      }}
    >
      <SearchInput />
      <Select optionValues={orderByValues} />
      <Select optionValues={contentFilterValues} />
      <Select optionValues={colorValues} />
      <Select optionValues={orientationValues} />
    </form>
  );
};
