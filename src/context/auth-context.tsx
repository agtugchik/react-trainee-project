import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type AuthContextType = {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType | null>(null);

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') === 'true');

  const initAuthStateValue = { isAuth, setIsAuth };

  return <AuthContext.Provider value={initAuthStateValue}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext) as AuthContextType;
};

export { AuthProvider, useAuth };
