import { FormFieldsNames } from 'constants/form-fields-names';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any, any, any>;
}

export const RememberCheckbox = ({ form }: Props) => {
  const { register } = form;

  return (
    <div className="flex items-start mb-6">
      <div className="flex items-center h-5">
        <input
          id={FormFieldsNames.REMEMBER}
          {...register(FormFieldsNames.REMEMBER)}
          type="checkbox"
          value=""
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
        />
      </div>
      <label
        htmlFor={FormFieldsNames.REMEMBER}
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Remember me
      </label>
    </div>
  );
};
