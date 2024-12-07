import React, { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any, any, any>;
};

export const RememberCheckbox = ({ form }: Props) => {
  const [checked, setChecked] = useState(false);
  const { register } = form;

  return (
    <div className="flex items-start mb-6">
      <div className="flex items-center h-5">
        <input
          id="remember"
          {...register('remember')}
          type="checkbox"
          value=""
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
        />
      </div>
      <label
        htmlFor="remember"
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Remember me
      </label>
    </div>
  );
};
