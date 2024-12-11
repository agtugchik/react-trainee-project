import React, { lazy } from 'react';
import AppPaths from 'constants/app-paths';
import AuthPage from 'pages/auth-page';
import { Page } from 'pages/page';

const LazyMainPage = lazy(() => import('pages/main-page'));
const LazyImagePage = lazy(() => import('pages/image-page'));
const LazyImagesPage = lazy(() => import('pages/images-page'));
const LazyProfilePage = lazy(() => import('pages/profile-page'));
const LazySignInForm = lazy(() => import('components/ui/sign-in-form'));
const LazySignUpForm = lazy(() => import('components/ui/sign-up-form'));

const routes = [
  {
    element: <Page />,
    children: [
      {
        path: AppPaths.ROOT,
      },
      {
        path: AppPaths.MAIN,
        element: <LazyMainPage />,
      },
      {
        path: AppPaths.AUTH,
        element: <AuthPage />,
        children: [
          { path: AppPaths.AUTH, element: <LazySignInForm /> },
          { path: AppPaths.SIGNUP, element: <LazySignUpForm /> },
        ],
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
    ],
  },
];

export default routes;
