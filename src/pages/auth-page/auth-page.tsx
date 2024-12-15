import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AppPaths from 'constants/app-paths';
import { AccountCondition } from 'components/ui/account-condition';

export const AuthPage = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          {pathname === AppPaths.AUTH && 'Sign in to your account'}
          {pathname === AppPaths.SIGNUP && 'Sign up your account'}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Outlet />
        <AccountCondition />
      </div>
    </div>
  );
};
