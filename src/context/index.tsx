import React, { Context, createContext, ReactNode, useState } from 'react';

const initAppState = { isAuth: localStorage.getItem('isAuth') === 'true' };

export const AppContext = createContext<typeof initAppState | null>(null) as Context<
  typeof initAppState
>;

type Props = {
  children: ReactNode;
};

const Context = ({ children }: Props) => {
  const [appState] = useState(initAppState);

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
};

export default Context;
