import {
  GoogleAuthProvider,
  User,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { FaGoogle, FaSignOutAlt } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.div``;

interface AuthProps {
  className: string;
}

const Auth = ({ className }: AuthProps) => {
  const [user, setUser] = useState<User | null>();

  const onSignInClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    const auth = getAuth();
    try {
      const result = await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  const onSignOutClick = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user): void => {
      setUser(user);
    });
  }, []);

  return (
    <Wrapper className={className}>
      {user === undefined ? (
        <>Loading...</>
      ) : user ? (
        <div onClick={onSignOutClick}>Sign out</div>
      ) : (
        <div onClick={onSignInClick}>Sign in with Google</div>
      )}
    </Wrapper>
  );
};

export default Auth;
