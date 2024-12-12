import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Page = () => (
  <Suspense fallback="loading...">
    <Outlet />
  </Suspense>
);
