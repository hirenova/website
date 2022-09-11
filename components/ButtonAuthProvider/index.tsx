import Button, { ButtonProps } from "components/Button"
import useAuth, { AuthProviderId } from "hooks/useAuth"
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa"
import styled from "styled-components"

const Wrapper = styled(Button)``

const MethodLabel = styled.span`
  margin-left: 5px;
`

const ProviderLabel = styled.span`
  margin-right: auto;
`

export type AuthMethodId = "login" | "sign_up"

interface ButtonAuthProviderProps extends Partial<ButtonProps> {
  authProviderId: AuthProviderId
  authMethodId: AuthMethodId
}

const authProviderSettings: {
  [key in AuthProviderId]: { label: string; icon: JSX.Element }
} = {
  google: { label: "Google", icon: <FaGoogle /> },
  github: { label: "GitHub", icon: <FaGithub /> },
  linkedin: { label: "LinkedIn", icon: <FaLinkedin /> },
}

const authMethodSettings: { [key in AuthMethodId]: { label: string } } = {
  login: { label: "Log in with" },
  sign_up: { label: "Sign up with" },
}

const ButtonAuthProvider = ({
  className,
  authProviderId,
  authMethodId,
  ...props
}: ButtonAuthProviderProps) => {
  const { login } = useAuth()
  const onClick = async () => {
    if (authMethodId === "sign_up") await login({ provider: authProviderId })
    if (authMethodId === "login") await login({ provider: authProviderId })
  }
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
  )
}

export default ButtonAuthProvider
