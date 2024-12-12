import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { AuthProvider } from 'context/';
import { GoogleOAuthProvider } from '@react-oauth/google';

export const App = () => {
  const appRoutes = useRoutes(routes);

  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId={process.env.CLIENT_ID || ''}>{appRoutes}</GoogleOAuthProvider>
    </AuthProvider>
  );
};
