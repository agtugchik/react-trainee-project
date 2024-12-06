import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import AppPaths from 'constants/app-paths';

const LazyMainPage = lazy(() => import('pages/main-page'));
const LazyAuthPage = lazy(() => import('pages/auth-page'));
const LazyImagePage = lazy(() => import('pages/image-page'));
const LazyImagesPage = lazy(() => import('pages/images-page'));
const LazyProfilePage = lazy(() => import('pages/profile-page'));

const routes = [
  {
    path: AppPaths.ROOT,
    element: <Navigate to={AppPaths.MAIN} />,
  },
  {
    path: AppPaths.MAIN,
    element: <LazyMainPage />,
  },
  {
    path: AppPaths.AUTH,
    element: <LazyAuthPage />,
  },
  {
    path: AppPaths.IMAGE,
    element: <LazyImagePage />,
  },
  {
    path: AppPaths.IMAGES,
    element: <LazyImagesPage />,
  },
  {
    path: AppPaths.PROFILE,
    element: <LazyProfilePage />,
  },
];

export default routes;
