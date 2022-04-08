import Button from "components/Button";
import Form from "components/Form";
import Input from "components/Input";
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

const EmailPassword = ({ className, authMethodId }: EmailPasswordProps) => {
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
    authWithEmailPassword({ authMethodId, email, password });
  };

  return (
    <Wrapper className={className} onSubmit={onSubmit}>
      <Input
        type="email"
        isRequired
        autoComplete="email"
        placeholder="Email"
        onChange={onChangeEmail}
        value={email}
      />
      <Input
        type="password"
        isRequired
        autoComplete={
          authMethodId === "login" ? "current-password" : "new-password"
        }
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
