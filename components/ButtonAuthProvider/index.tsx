import Button, { ButtonProps } from "components/Button";
import useAuth, { AuthWithProviderParams } from "hooks/useAuth";
import { MouseEventHandler } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaMicrosoft } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled(Button)``;

const MethodLabel = styled.span`
  margin-left: 5px;
`;

const ProviderLabel = styled.span`
  margin-right: auto;
`;

export interface ButtonAuthProviderProps
  extends ButtonProps,
    AuthWithProviderParams {}

const ButtonAuthProvider = ({
  className,
  authProviderId,
  authMethodId,
  ...props
}: ButtonAuthProviderProps) => {
  const { authWithProvider } = useAuth();

  const onClick: MouseEventHandler<HTMLButtonElement> = async () => {
    await authWithProvider({ authMethodId, authProviderId });
  };

  const authProviderSettings = {
    google: { label: "Google", icon: <FaGoogle /> },
    facebook: { label: "Facebook", icon: <FaFacebook /> },
    github: { label: "GitHub", icon: <FaGithub /> },
    microsoft: { label: "Microsoft", icon: <FaMicrosoft /> },
  };

  const authMethodSettings = {
    login: { label: "Log in with" },
    sign_up: { label: "Sign up with" },
  };

  return (
    <Wrapper
      className={className}
      onClick={onClick}
      leftIcon={authProviderSettings[authProviderId].icon}
      {...props}
    >
      <MethodLabel>{authMethodSettings[authMethodId].label}</MethodLabel>
      &nbsp;
      <ProviderLabel>
        {authProviderSettings[authProviderId].label}
      </ProviderLabel>
    </Wrapper>
  );
};

export default ButtonAuthProvider;
