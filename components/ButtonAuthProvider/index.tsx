import Button, { ButtonProps } from "components/Button";
import useAuth from "hooks/useAuth";
import { MouseEventHandler } from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

const Wrapper = styled(Button)``;

export interface ButtonAuthProviderProps
  extends Pick<ButtonProps, "className"> {
  icon: ButtonProps["leftIcon"];
  label: string;
  provider: "google";
  method: "login" | "sign_up";
}

const methods = {
  login: { label: "Log in with" },
  sign_up: { label: "Sign up with" },
};

const MethodLabel = styled.span``;

const ProviderLabel = styled.span``;

const ButtonAuthProvider = ({
  className,
  label,
  provider,
  method,
  icon,
}: ButtonAuthProviderProps) => {
  const { loginProvider } = useAuth();

  const onClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
    await loginProvider({ provider });
  };

  return (
    <Wrapper className={className} onClick={onClick} leftIcon={icon}>
      <MethodLabel>{methods[method].label}</MethodLabel>
      &nbsp;
      <ProviderLabel>{label}</ProviderLabel>
    </Wrapper>
  );
};

export default ButtonAuthProvider;
