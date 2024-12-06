import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Page = () => {
  return (
    <Suspense fallback="loading...">
      <Outlet />
    </Suspense>
  );
};
