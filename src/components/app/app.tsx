import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'constants/routes';
import { Page } from 'pages/page';
import { AuthProvider } from 'context';

export const App = () => {
  const appRoutes = useRoutes(routes);

  return (
    <AuthProvider>
      {/* {'react-trainee-project'} */}
      {appRoutes}
      <Page />
    </AuthProvider>
  );
};
