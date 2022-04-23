import { auth, db } from "config/firebase";
import { FirebaseError } from "firebase/app";
import { doc } from "firebase/firestore";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { AuthStateHook, useAuthState } from "react-firebase-hooks/auth";
import {
  DocumentDataHook,
  DocumentHook,
  useDocument,
  useDocumentData,
} from "react-firebase-hooks/firestore";

export type AuthErrorType = FirebaseError | null;

export type ProfileTypeIdSelected = "candidate" | "employer" | null;

export type UserDocument = {};

export type UserDocumentData = {
  profileTypeIdSelected?: ProfileTypeIdSelected;
  candidate?: {
    resume: string;
    description: { head: string; body: string };
  };
  employer?: { company: string };
};

export interface AppContextValue {
  user: AuthStateHook[0];
  userLoading: AuthStateHook[1];
  userError: AuthStateHook[2];
  userDocument: DocumentHook[0];
  userDocumentLoading: DocumentHook[1];
  userDocumentError: DocumentHook[2];
  userDocumentData: UserDocumentData | undefined;
  userDocumentDataLoading: DocumentDataHook[1];
  authLoading: boolean;
  authError: AuthErrorType;
  sidebarOpen: boolean;
  profileTypeIdSelected: ProfileTypeIdSelected;
  setAuthLoading: Dispatch<SetStateAction<boolean>>;
  setAuthError: Dispatch<SetStateAction<AuthErrorType>>;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  setProfileTypeIdSelected: Dispatch<SetStateAction<ProfileTypeIdSelected>>;
}

const InitialAppContextValue: AppContextValue = {
  user: undefined,
  userLoading: true,
  userError: undefined,
  userDocument: undefined,
  userDocumentLoading: true,
  userDocumentError: undefined,
  userDocumentData: undefined,
  userDocumentDataLoading: true,
  authLoading: false,
  authError: null,
  sidebarOpen: false,
  profileTypeIdSelected: null,
  setAuthError: () => {},
  setAuthLoading: () => {},
  setSidebarOpen: () => {},
  setProfileTypeIdSelected: () => {},
};

export const AppContext = createContext(InitialAppContextValue);

export interface AppProviderProps {
  children: React.ReactNode;
}
const AppProvider = ({ children }: AppProviderProps) => {
  const [user, userLoading, userError] = useAuthState(auth);

  const [authLoading, setAuthLoading] = useState<
    AppContextValue["authLoading"]
  >(InitialAppContextValue["authLoading"]);

  const [authError, setAuthError] = useState<AppContextValue["authError"]>(
    InitialAppContextValue["authError"]
  );

  const [sidebarOpen, setSidebarOpen] = useState<
    AppContextValue["sidebarOpen"]
  >(InitialAppContextValue["sidebarOpen"]);

  const [profileTypeIdSelected, setProfileTypeIdSelected] = useState<
    AppContextValue["profileTypeIdSelected"]
  >(InitialAppContextValue["profileTypeIdSelected"]);

  const [userDocument, userDocumentLoading, userDocumentError] =
    useDocument<UserDocument>(doc(db, "users", String(user?.uid)));

  const [userDocumentData, userDocumentDataLoading, userDocumentDataError] =
    useDocumentData<UserDocumentData>(doc(db, "users", String(user?.uid)));

  useEffect(() => {
    if (!userDocumentData) return setProfileTypeIdSelected(null);
    if (userDocumentData.profileTypeIdSelected)
      return setProfileTypeIdSelected(userDocumentData.profileTypeIdSelected);
    if (userDocumentData.candidate)
      return setProfileTypeIdSelected("candidate");
    if (userDocumentData.employer) return setProfileTypeIdSelected("employer");
    setProfileTypeIdSelected(null);
  }, [userDocumentData]);

  return (
    <AppContext.Provider
      value={{
        user,
        userLoading,
        userError,
        userDocument,
        userDocumentLoading,
        userDocumentError,
        userDocumentData,
        userDocumentDataLoading,
        authLoading,
        authError,
        sidebarOpen,
        profileTypeIdSelected,
        setAuthError,
        setAuthLoading,
        setSidebarOpen,
        setProfileTypeIdSelected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
