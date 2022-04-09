import { auth } from "config/firebase";
import { FirebaseError } from "firebase/app";
import { User, onAuthStateChanged } from "firebase/auth";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { AuthStateHook, useAuthState } from "react-firebase-hooks/auth";

export type AuthErrorType = FirebaseError | null;

export type UserType = User | null | undefined;

export type UserDocument = {} | null | undefined;

export interface AppContextValue {
  user: AuthStateHook[0];
  userLoading: AuthStateHook[1];
  userError: AuthStateHook[2];
  authLoading: boolean;
  authError: AuthErrorType;
  sidebarOpen: boolean;
  setAuthLoading: Dispatch<SetStateAction<boolean>>;
  setAuthError: Dispatch<SetStateAction<AuthErrorType>>;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const InitialAppContextValue: AppContextValue = {
  user: undefined,
  userLoading: true,
  userError: undefined,
  authLoading: false,
  authError: null,
  setAuthError: () => {},
  setAuthLoading: () => {},
  sidebarOpen: false,
  setSidebarOpen: () => {},
};

export const AppContext = createContext(InitialAppContextValue);

export interface AppProviderProps {
  children: React.ReactNode;
}
const AppProvider = ({ children }: AppProviderProps) => {
  const [user, userLoading, userError] = useAuthState(auth);
  const [authLoading, setAuthLoading] =
    useState<AppContextValue["authLoading"]>(false);
  const [authError, setAuthError] =
    useState<AppContextValue["authError"]>(null);
  const [sidebarOpen, setSidebarOpen] =
    useState<AppContextValue["sidebarOpen"]>(false);

  return (
    <AppContext.Provider
      value={{
        user,
        userLoading,
        userError,
        authLoading,
        authError,
        sidebarOpen,
        setAuthError,
        setAuthLoading,
        setSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
