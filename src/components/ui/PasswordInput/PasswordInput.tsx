import React from 'react';
import { InputValidationError } from '../InputValidationError';
import { isValidPass } from 'constants/reg-exp';
import { FormFieldsNames } from 'constants/form-fields-names';
import { PasswordInputProps } from 'types/form-input-button';

export const passwordInputLabel = 'Password';
export const passwordConfirmInputLabel = 'Confirm Password';
export const forgotText = 'Forgot password?';

export const PasswordInput = ({ isConfirm, isForgot, form }: PasswordInputProps) => {
  const {
    register,
    getValues,
    formState: { errors },
  } = form;

  const validatePassword = () => (isConfirm ? undefined : isValidPass);

  const validateConfirmPassword = () =>
    isConfirm
      ? () => getValues(FormFieldsNames.PASSWORD) === getValues(FormFieldsNames.CONFIRM_PASSWORD)
      : undefined;

  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={isConfirm ? FormFieldsNames.CONFIRM_PASSWORD : FormFieldsNames.PASSWORD}
          className="block text-sm/6 font-medium text-gray-900"
        >
          {!isConfirm ? passwordInputLabel : passwordConfirmInputLabel}
        </label>
        {isForgot && (
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              {forgotText}
            </a>
          </div>
        )}
      </div>
      <div className="mt-2">
        <input
          id={isConfirm ? FormFieldsNames.CONFIRM_PASSWORD : FormFieldsNames.PASSWORD}
          {...register(isConfirm ? FormFieldsNames.CONFIRM_PASSWORD : FormFieldsNames.PASSWORD, {
            required: true,
            pattern: validatePassword(),
            validate: validateConfirmPassword(),
          })}
          type="password"
          autoComplete="current-password"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
      {errors[FormFieldsNames.PASSWORD] && !isConfirm && (
        <InputValidationError inputType={FormFieldsNames.PASSWORD} />
      )}
      {errors[FormFieldsNames.CONFIRM_PASSWORD] && isConfirm && (
        <InputValidationError inputType={FormFieldsNames.CONFIRM_PASSWORD} />
      )}
    </div>
  );
};
