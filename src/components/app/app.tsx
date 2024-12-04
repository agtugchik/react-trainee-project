import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'constants/routes';
import { Page } from 'pages/page';

export const App = () => {
  const appRoutes = useRoutes(routes);

  return (
    <>
      {appRoutes}
      <Page />
    </>
  );
};
