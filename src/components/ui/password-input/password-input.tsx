import React from 'react';

type Props = {
  isConfirm?: boolean;
  isForgot?: boolean;
};

export const PasswordInput = ({ isConfirm, isForgot }: Props) => (
  <div>
    <div className="flex items-center justify-between">
      <label
        htmlFor={isConfirm ? 'confirm_password' : 'password'}
        className="block text-sm/6 font-medium text-gray-900"
      >
        {!isConfirm && 'Password'}
        {isConfirm && 'Confirm Password'}
      </label>
      {isForgot && (
        <div className="text-sm">
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Forgot password?
          </a>
        </div>
      )}
    </div>
    <div className="mt-2">
      <input
        id={isConfirm ? 'confirm_password' : 'password'}
        name={isConfirm ? 'confirm_password' : 'password'}
        type="password"
        required
        autoComplete="current-password"
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      />
    </div>
  </div>
);
