import AppPaths from 'constants/app-paths';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const className = 'font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer';

export const AccountCondition = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <p className="mt-10 text-center text-sm/6 text-gray-500">
      {pathname === AppPaths.AUTH && 'No accaunt? '}
      {pathname === AppPaths.SIGNUP && 'Already have account? '}

      <span
        onClick={() => navigate(pathname === AppPaths.AUTH ? AppPaths.SIGNUP : AppPaths.AUTH)}
        className={className}
      >
        {pathname === AppPaths.AUTH && 'Create now'}
        {pathname === AppPaths.SIGNUP && 'Log In'}
      </span>
    </p>
  );
};
