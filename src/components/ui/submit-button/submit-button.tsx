import React from 'react';
import AppPaths from 'constants/app-paths';
import { useLocation } from 'react-router-dom';
import { UseFormReturn } from 'react-hook-form';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any, any, any>;
};

export const SubmitButton = ({ form }: Props) => {
  const location = useLocation();
  const pathname = location.pathname;
  const {
    getValues,
    formState: { isDirty, isValid },
  } = form;

  const initButtonDisabled = () => {
    const formValues = getValues();
    let isDisabled = true;
    for (const key in formValues) {
      if (typeof key === 'string' && formValues[key].length) isDisabled = false;
    }
    return isDisabled;
  };

  return (
    <div>
      <button
        disabled={(isDirty && !isValid) || initButtonDisabled()}
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pathname === AppPaths.AUTH && 'Sign in'}
        {pathname === AppPaths.SIGNUP && 'Sign up'}
      </button>
    </div>
  );
};
