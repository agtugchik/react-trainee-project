import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'constants/routes';

export const App = () => {
  const appRoutes = useRoutes(routes);

  return <div>{appRoutes}</div>;
};
