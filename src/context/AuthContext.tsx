import React, { createContext, ReactNode, useContext, useState } from 'react';

interface AuthContextType {
  isAuth: boolean;
  handleAuth: (isRemember: boolean) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') === 'true');

  const handleAuth = (isRemember: boolean) => {
    setIsAuth(!isAuth);
    if (isRemember) {
      localStorage.setItem('isAuth', 'true');
    }
  };

  const initAuthStateValue = { isAuth, handleAuth };

  return <AuthContext.Provider value={initAuthStateValue}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext) as AuthContextType;
};

export { AuthProvider, useAuth };
