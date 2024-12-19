import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { AuthProvider, QueryProvider } from 'context/';

export const App = () => {
  const appRoutes = useRoutes(routes);

  return (
    <QueryProvider>
      <AuthProvider>{appRoutes}</AuthProvider>
    </QueryProvider>
  );
};
