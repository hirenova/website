import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export interface AppContextValue {
  auth: boolean;
  user: User | null;
  //   setAuth: Dispatch<SetStateAction<boolean>>;
  //   setUser: Dispatch<SetStateAction<User | null>>;
}

const InitialAppContextValue: AppContextValue = {
  auth: false,
  user: null,
  //   setAuth: () => {},
  //   setUser: () => {},
};

export const AppContext = createContext(InitialAppContextValue);

export interface AppProviderProps {
  children: React.ReactNode;
}
const AppProvider = ({ children }: AppProviderProps) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribeAuthStateChange = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuth(Boolean(user));
    });
    return () => {
      unsubscribeAuthStateChange();
    };
  }, []);

  return (
    <AppContext.Provider value={{ auth, user }}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
