import AppPaths from 'constants/app-paths';
import React, { Suspense } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const Page = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Suspense fallback="loading...">
      {pathname === AppPaths.ROOT ? <Navigate to={AppPaths.AUTH} /> : <Outlet />}
    </Suspense>
  );
};
