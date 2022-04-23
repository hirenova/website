import { auth, db } from "config/firebase";
import { FirebaseError } from "firebase/app";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

import useApp from "./useApp";

// import { useCollection } from "react-firebase-hooks/firestore";

export type AccountTypeIdType = "candidate" | "employer";

export type AuthMethodIdType = "login" | "sign_up";

export interface AuthParams {
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
  // const [users, usersLoading, usersError] = useCollection(
  //   collection(db, "users")
  // );

  const { setAuthError } = useApp();

  const onAuth = async (credential: UserCredential) => {
    const userDocumentData = await getDoc(
      doc(db, "users", credential.user.uid)
    );
    if (!userDocumentData.exists()) {
      await setDoc(doc(db, "users", credential.user.uid), {});
    }
  };

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
    const provider = authProviders[authProviderId]();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    if (authMethodId === "login" || authMethodId === "sign_up") {
      try {
        const credential = await signInWithPopup(auth, provider);
        await onAuth(credential);
      } catch (error) {
        if (error instanceof FirebaseError) setAuthError(error);
        else console.log(error);
      }
    }
  };

  const authWithEmailPassword = async ({
    authMethodId,
    email,
    password,
  }: AuthWithEmailPasswordParams) => {
    try {
      if (authMethodId === "login") {
        const credential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        await onAuth(credential);
      } else {
        const credential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await onAuth(credential);
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        setAuthError(error);
      }
    }
  };

  const logout = async () => {
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
