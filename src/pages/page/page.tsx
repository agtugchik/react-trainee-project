import AppPaths from 'constants/app-paths';
import { useAuth } from 'context';
import React, { Suspense } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const Page = () => {
  const { isAuth } = useAuth();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Suspense fallback="loading...">
      {isAuth && pathname !== AppPaths.AUTH && pathname !== AppPaths.SIGNUP ? (
        <Outlet />
      ) : pathname === AppPaths.SIGNUP ? (
        <Navigate to={AppPaths.SIGNUP} />
      ) : (
        <Navigate to={AppPaths.AUTH} />
      )}
    </Suspense>
  );
};
