import React from 'react';
import {
  colorValues,
  contentFilterValues,
  orderByValues,
  orientationValues,
} from 'constants/query-filters';

interface Props {
  optionValues:
    | typeof orderByValues
    | typeof contentFilterValues
    | typeof colorValues
    | typeof orientationValues;
}

export const Select = ({ optionValues }: Props) => {
  return (
    <>
      <label
        htmlFor={optionValues.name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        defaultValue={localStorage.getItem(optionValues.name) || ''}
        id={optionValues.name}
        name={optionValues.name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">{optionValues.baseOption}</option>
        {Object.entries(optionValues.options).map((option) => (
          <option key={option[1]} value={option[1]}>
            {option[0]}
          </option>
        ))}
      </select>
    </>
  );
};
