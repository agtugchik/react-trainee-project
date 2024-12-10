import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { InputValidationError } from '../input-validation-error';
import { isEmail } from 'constants/reg-exp';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any, any, any>;
};

export const EmailInput = ({ form }: Props) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
        Email address
      </label>
      <div className="mt-2">
        <input
          id="email"
          {...register('email', {
            required: true,
            pattern: isEmail,
          })}
          type="email"
          autoComplete="email"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
        {errors?.email && <InputValidationError inputType="email" />}
      </div>
    </div>
  );
};
