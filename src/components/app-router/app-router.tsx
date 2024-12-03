import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthPage } from 'pages/auth-page';
import { MainPage } from 'pages/main-page';
import { ImagePage } from 'pages/image-page';
import { ImagesPage } from 'pages/images-page';
import { ProfilePage } from 'pages/profile';
import AppPaths from 'constants/app-paths';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={AppPaths.ROOT} element={<Navigate to={AppPaths.MAIN} />} />
      <Route path={AppPaths.MAIN} element={<MainPage />} />
      <Route path={AppPaths.AUTH} element={<AuthPage />} />
      <Route path={AppPaths.IMAGE} element={<ImagePage />} />
      <Route path={AppPaths.IMAGES} element={<ImagesPage />} />
      <Route path={AppPaths.PROFILE} element={<ProfilePage />} />
    </Routes>
  );
};
