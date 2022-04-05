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

import useApp from "./useApp";

// import { db } from "config/firebase";
// import { collection, doc, setDoc } from "firebase/firestore";
// import { useCollection } from "react-firebase-hooks/firestore";

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
  // const [users, usersLoading, setUsersLoading] = useCollection(
  //   collection(db, "users")
  // );

  const { setAuthError } = useApp();

  const authProviders = {
    google: () => new GoogleAuthProvider(),
    microsoft: () => new OAuthProvider("microsoft.com"),
    facebook: () => new FacebookAuthProvider(),
    github: () => new GithubAuthProvider(),
  };

  const errors = {
    "auth/email-already-exists": "Email already exists.",
    "auth/internal-error": "Unexpected internal error. Please try again later.",
    "auth/invalid-email": "Email address invalid.",
    "auth/invalid-password": "Password must be at least six characters.",
    "auth/maximum-user-count-exceeded":
      "The maximum allowed number of users has been exceeded. Please try again later.",
    "auth/user-not-found": "User not found.",
  };

  const authWithProvider = async ({
    accountTypeId,
    authMethodId,
    authProviderId,
  }: AuthWithProviderParams) => {
    const auth = getAuth();
    const provider = authProviders[authProviderId]();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    if (authMethodId === "login" || authMethodId === "sign_up") {
      const credential = await signInWithPopup(auth, provider);
      console.log(credential);
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
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        setAuthError(error);
      }
    }

    // setDoc(doc(db, `${accountType}s`, uid), { test2: 321 });
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
