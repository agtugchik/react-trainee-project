import React, { lazy } from 'react';
import AppPaths from 'constants/app-paths';
import AuthPage from 'pages/AuthPage';
import { Page } from 'pages/Page';
import { Navigate } from 'react-router-dom';
import { SearchParamsProvider } from 'context';

const LazyMainPage = lazy(() => import('pages/MainPage'));
const LazyImagePage = lazy(() => import('pages/ImagePage'));
const LazyImagesPage = lazy(() => import('pages/ImagesPage'));
const LazyProfilePage = lazy(() => import('pages/ProfilePage'));
const LazySignInForm = lazy(() => import('components/ui/SignInForm'));
const LazySignUpForm = lazy(() => import('components/ui/SignUpForm'));

const routes = [
  {
    element: <Page />,
    children: [
      {
        path: AppPaths.ROOT,
        element: <Navigate to={AppPaths.AUTH} />,
      },
      {
        path: AppPaths.MAIN,
        element: (
          <SearchParamsProvider>
            <LazyMainPage />
          </SearchParamsProvider>
        ),
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
