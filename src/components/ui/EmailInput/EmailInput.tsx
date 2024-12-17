import React from 'react';
import { InputValidationError } from '../InputValidationError';
import { isEmail } from 'constants/reg-exp';
import { FormFieldsNames } from 'constants/form-fields-names';
import { BaseInputProps } from 'types/form-input-button';

export const EmailInput = ({ form }: BaseInputProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <label htmlFor={FormFieldsNames.EMAIL} className="block text-sm/6 font-medium text-gray-900">
        Email address
      </label>
      <div className="mt-2">
        <input
          id={FormFieldsNames.EMAIL}
          {...register(FormFieldsNames.EMAIL, {
            required: true,
            pattern: isEmail,
          })}
          type="email"
          autoComplete="email"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
        {errors?.email && <InputValidationError inputType={FormFieldsNames.EMAIL} />}
      </div>
    </div>
  );
};
