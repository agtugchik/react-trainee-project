import React from 'react';
import AppPaths from 'constants/app-paths';
import { useLocation } from 'react-router-dom';
import { BaseInputProps } from 'types/form-input-button';

export const signInText = 'Sign in';
export const signUpText = 'Sign up';

export const SubmitButton = ({ form }: BaseInputProps) => {
  const location = useLocation();
  const pathname = location.pathname;
  const {
    formState: { isDirty, isValid },
    getValues,
  } = form;

  const initButtonDisabled = () => {
    const formValues = Object.entries(getValues());
    const isDisabled = formValues.every((v) => !v[1].length);
    return isDisabled;
  };

  return (
    <div>
      <button
        disabled={(isDirty && !isValid) || initButtonDisabled()}
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pathname === AppPaths.AUTH && signInText}
        {pathname === AppPaths.SIGNUP && signUpText}
      </button>
    </div>
  );
};
