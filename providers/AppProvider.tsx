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
import { useDocumentData } from "react-firebase-hooks/firestore";

export type AuthErrorType = FirebaseError | null;

export type ProfileTypeIdSelected = "candidate" | "employer" | null;

export type UserDocumentData = {
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
  userDocument: UserDocumentData | undefined;
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
    useDocumentData<UserDocumentData>(doc(db, "users", String(user?.uid)));

  useEffect(() => {
    if (!userDocument) return;
    if (userDocument.candidate) return setProfileTypeIdSelected("candidate");
    if (userDocument.employer) return setProfileTypeIdSelected("employer");
    setProfileTypeIdSelected(null);
  }, [userDocument]);

  return (
    <AppContext.Provider
      value={{
        user,
        userLoading,
        userError,
        userDocument,
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
