import { useToast } from "@chakra-ui/react";
import Box from "components/Box";
import Heading from "components/Heading";
import { FirebaseError } from "firebase/app";
import useApp from "hooks/useApp";
import { AuthMethodIdType } from "hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

import EmailPassword from "./EmailPassword";
import Providers from "./Providers";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
`;

export interface BoxAuthProps {
  className?: string;
  authMethodId: AuthMethodIdType;
}

const Modes = styled(Box)`
  display: flex;
  gap: 100px;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Separator = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media (min-width: 800px) {
    flex-direction: column;
  }
  color: lightgrey;
`;

const SeparatorLine = styled.div`
  background: lightgrey;
  @media (max-width: 800px) {
    width: 100px;
    height: 1px;
    margin-top: 5px;
  }
  @media (min-width: 800px) {
    width: 1px;
    height: 100px;
  }
`;

const BoxAuth = ({ className, authMethodId }: BoxAuthProps) => {
  const { authError, user, userDocumentData } = useApp();

  const toast = useToast();

  const router = useRouter();

  useEffect(() => {
    const errors: { [key in FirebaseError["code"]]: string } = {
      "auth/email-already-exists": "Email already exists.",
      "auth/email-already-in-use": "Email address already in use.",
      "auth/internal-error":
        "Unexpected internal error. Please try again later.",
      "auth/invalid-email": "Email address invalid.",
      "auth/invalid-password": "Password must be at least six characters long.",
      "auth/maximum-user-count-exceeded":
        "The maximum allowed number of users has been exceeded. Please try again later.",
      "auth/user-not-found": "User not found.",
      "auth/weak-password": "Password must be at least six characters long.",
      "auth/wrong-password": "Wrong password.",
    };

    if (!authError) return;
    let description = `An unexpected error ocurred. (${authError.code})`;
    if (authError.code in errors) description = errors[authError.code];
    toast({ title: "Error", description, status: "error" });
  }, [toast, authError]);

  useEffect(() => {
    if (user && userDocumentData)
      router.push({
        pathname: router.query?.path?.toString() || "/dashboard/profile",
      });
  }, [router, user, userDocumentData]);

  return (
    <Wrapper className={className}>
      <Modes>
        <Providers authMethodId={authMethodId} />
        <Separator>
          <SeparatorLine />
          <Heading size="md">or</Heading>
          <SeparatorLine />
        </Separator>
        <EmailPassword authMethodId={authMethodId} />
      </Modes>
    </Wrapper>
  );
};

export default BoxAuth;
