import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'constants/routes';
import { Page } from 'pages/page';
import { AuthProvider } from 'context';
import { GoogleOAuthProvider } from '@react-oauth/google';

export const App = () => {
  const appRoutes = useRoutes(routes);

  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId="676793723203-lg4jrd095rr52hivu8s2losdr70kudmo.apps.googleusercontent.com">
        {appRoutes}
        <Page />
      </GoogleOAuthProvider>
    </AuthProvider>
  );
};
