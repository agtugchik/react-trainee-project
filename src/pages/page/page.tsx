import AppPaths from 'constants/app-paths';
import { AppContext } from 'context';
import React, { Suspense, useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const Page = () => {
  const { isAuth } = useContext(AppContext);
  const location = useLocation();
  const pathname = location.pathname;
  console.log(isAuth);

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
