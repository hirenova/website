import { Button, Input, useToast } from "@chakra-ui/react";
import Form from "components/Form";
import { FirebaseError } from "firebase/app";
import useApp from "hooks/useApp";
import useAuth, { AuthParams } from "hooks/useAuth";
import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";

const Wrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: fit-content;
`;

interface EmailPasswordProps extends AuthParams {
  className?: string;
}

const EmailPassword = ({
  className,
  authMethodId,
  accountTypeId,
}: EmailPasswordProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { authWithEmailPassword } = useAuth();

  const { authError } = useApp();

  const toast = useToast();

  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    authWithEmailPassword({ accountTypeId, authMethodId, email, password });
  };

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
    // toast({ title: "Error", description, status: "error" });
  }, [toast, authError]);

  return (
    <Wrapper className={className} onSubmit={onSubmit}>
      <Input
        type="email"
        required
        placeholder="Email"
        onChange={onChangeEmail}
        value={email}
      />
      <Input
        type="password"
        required
        placeholder="Password"
        onChange={onChangePassword}
        value={password}
      />
      <Button type="submit">
        {authMethodId === "login" ? "Log in" : "Sign up"}
      </Button>
    </Wrapper>
  );
};

export default EmailPassword;
