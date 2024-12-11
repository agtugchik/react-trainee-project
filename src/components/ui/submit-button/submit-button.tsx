import React from 'react';
import AppPaths from 'constants/app-paths';
import { useLocation } from 'react-router-dom';
import { BaseInputProps } from 'types/form-input-button';

export const SubmitButton = ({ form }: BaseInputProps) => {
  const location = useLocation();
  const pathname = location.pathname;
  const {
    formState: { isDirty, isValid },
  } = form;

  return (
    <div>
      <button
        disabled={isDirty && !isValid}
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pathname === AppPaths.AUTH && 'Sign in'}
        {pathname === AppPaths.SIGNUP && 'Sign up'}
      </button>
    </div>
  );
};
