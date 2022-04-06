import { Button, Input } from "@chakra-ui/react";
import Form from "components/Form";
import useAuth, { AuthParams } from "hooks/useAuth";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
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

  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    authWithEmailPassword({ accountTypeId, authMethodId, email, password });
  };

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
