import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
  useToast,
} from "@chakra-ui/react";
import Box from "components/Box";
import Heading from "components/Heading";
import { FirebaseError } from "firebase/app";
import useApp from "hooks/useApp";
import { AccountTypeIdType, AuthMethodIdType } from "hooks/useAuth";
import { useEffect, useState } from "react";
import styled from "styled-components";

import EmailPassword from "./EmailPassword";
import Providers from "./Providers";

// import ChooseAccountType from "./ChooseAccountType";

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
  border-color: red;
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
  const [accountType, setAccountType] =
    useState<AccountTypeIdType>("candidate");

  const { authError } = useApp();

  const toast = useToast();

  useEffect(() => {
    const errors: { [key in FirebaseError["code"]]: string } = {
      "auth/email-already-exists": "Email already exists.",
      "auth/internal-error":
        "Unexpected internal error. Please try again later.",
      "auth/invalid-email": "Email address invalid.",
      "auth/invalid-password": "Password must be at least six characters long.",
      "auth/maximum-user-count-exceeded":
        "The maximum allowed number of users has been exceeded. Please try again later.",
      "auth/user-not-found": "User not found.",
      "auth/weak-password": "Password must be at least six characters long.",
    };

    if (!authError) return;
    let description = `An unexpected error ocurred. (${authError.code})`;
    if (authError.code in errors) description = errors[authError.code];
    toast({ title: "Error", description, status: "error" });
  }, [toast, authError]);

  return (
    <Wrapper className={className}>
      {/* <ChooseAccountType
        accountType={accountType}
        setAccountType={setAccountType}
      /> */}
      {/* <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
        <AlertDescription>
          Your Chakra experience may be degraded.
        </AlertDescription>
      </Alert> */}
      <Modes>
        <Providers accountTypeId={accountType} authMethodId={authMethodId} />
        <Separator>
          <SeparatorLine />
          <Heading size="md">or</Heading>
          <SeparatorLine />
        </Separator>
        <EmailPassword
          accountTypeId={accountType}
          authMethodId={authMethodId}
        />
      </Modes>
    </Wrapper>
  );
};

export default BoxAuth;