import { FirebaseError } from "firebase/app";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export type AuthErrorType = FirebaseError | null;

export type UserType = User | null | undefined;

export type UserDocument = {} | null | undefined;

export interface AppContextValue {
  user: UserType;
  authLoading: boolean;
  authError: AuthErrorType;
  setAuthLoading: Dispatch<SetStateAction<boolean>>;
  setAuthError: Dispatch<SetStateAction<AuthErrorType>>;
}

const InitialAppContextValue: AppContextValue = {
  user: undefined,
  authLoading: false,
  authError: null,
  setAuthError: () => {},
  setAuthLoading: () => {},
};

export const AppContext = createContext(InitialAppContextValue);

export interface AppProviderProps {
  children: React.ReactNode;
}
const AppProvider = ({ children }: AppProviderProps) => {
  const [user, setUser] = useState<UserType>();
  const [authLoading, setAuthLoading] = useState<boolean>(false);
  const [authError, setAuthError] = useState<AuthErrorType>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribeAuthStateChange = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      unsubscribeAuthStateChange();
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        authLoading,
        authError,
        setAuthError,
        setAuthLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
