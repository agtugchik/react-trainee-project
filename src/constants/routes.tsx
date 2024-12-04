import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthPage } from 'pages/auth-page';
import { MainPage } from 'pages/main-page';
import { ImagePage } from 'pages/image-page';
import { ImagesPage } from 'pages/images-page';
import { ProfilePage } from 'pages/profile';
import AppPaths from 'constants/app-paths';

const routes = [
  {
    path: AppPaths.ROOT,
    element: <Navigate to={AppPaths.MAIN} />,
  },
  {
    path: AppPaths.MAIN,
    element: <MainPage />,
  },
  {
    path: AppPaths.AUTH,
    element: <AuthPage />,
  },
  {
    path: AppPaths.IMAGE,
    element: <ImagePage />,
  },
  {
    path: AppPaths.IMAGES,
    element: <ImagesPage />,
  },
  {
    path: AppPaths.ROOT,
    element: <ProfilePage />,
  },
];

export default routes;
