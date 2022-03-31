import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import useApp from "./useApp";

const useAuth = () => {
  const { auth, user } = useApp();

  interface LoginProviderParams {
    provider: "google";
  }

  const providers = {
    google: GoogleAuthProvider,
  };

  const loginProvider = async ({
    provider: providerName,
  }: LoginProviderParams) => {
    const provider = new providers[providerName]();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    const auth = getAuth();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  interface AuthEmailPasswordParams {
    email: string;
    password: string;
  }

  interface LoginEmailPasswordParams extends AuthEmailPasswordParams {}

  const loginEmailPassword = async ({
    email,
    password,
  }: LoginEmailPasswordParams) => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  interface SignUpEmailPasswordParams extends AuthEmailPasswordParams {}

  const signUpEmailPassword = async ({
    email,
    password,
  }: SignUpEmailPasswordParams) => {
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
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
    loginProvider,
    loginEmailPassword,
    signUpEmailPassword,
    logout,
  };
};

export default useAuth;
