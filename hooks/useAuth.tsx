import { db } from "config/firebase";
import { FirebaseError } from "firebase/app";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import useApp from "./useApp";

export type AccountTypeIdType = "candidate" | "employer";

export type AuthMethodIdType = "login" | "sign_up";

export interface AuthParams {
  accountTypeId: AccountTypeIdType;
  authMethodId: AuthMethodIdType;
}

export type AuthProviderIdType = "google" | "microsoft" | "facebook" | "github";

export interface AuthWithProviderParams extends AuthParams {
  authProviderId: AuthProviderIdType;
}

export interface AuthWithEmailPasswordParams extends AuthParams {
  email: string;
  password: string;
}

const useAuth = () => {
  const [users, usersLoading, usersError] = useCollection(
    collection(db, "users")
  );

  const { setAuthError } = useApp();

  const authProviders = {
    google: () => new GoogleAuthProvider(),
    microsoft: () => new OAuthProvider("microsoft.com"),
    facebook: () => new FacebookAuthProvider(),
    github: () => new GithubAuthProvider(),
  };

  const authWithProvider = async ({
    authMethodId,
    authProviderId,
  }: AuthWithProviderParams) => {
    const auth = getAuth();
    const provider = authProviders[authProviderId]();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    if (authMethodId === "login" || authMethodId === "sign_up") {
      try {
        const credential = await signInWithPopup(auth, provider);
        const userDocument = await getDoc(
          doc(db, "users", credential.user.uid)
        );
        if (!userDocument.exists())
          await setDoc(doc(db, "users", credential.user.uid), {});
      } catch (error) {
        if (error instanceof FirebaseError) setAuthError(error);
        else console.log(error);
      }
    }
  };

  const authWithEmailPassword = async ({
    accountTypeId,
    authMethodId,
    email,
    password,
  }: AuthWithEmailPasswordParams) => {
    const auth = getAuth();
    try {
      if (authMethodId === "login") {
        const credential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        const credential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await setDoc(doc(db, "users", credential.user.uid), {});
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        setAuthError(error);
      }
    }
  };

  const logout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    authWithProvider,
    authWithEmailPassword,
    logout,
  };
};

export default useAuth;
