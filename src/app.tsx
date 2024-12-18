import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { AuthProvider } from 'context/';

export const App = () => {
  const appRoutes = useRoutes(routes);

  return <AuthProvider>{appRoutes}</AuthProvider>;
};
