import Box, { BoxProps } from "components/Box"
import ButtonAuthProvider, { AuthMethodId } from "components/ButtonAuthProvider"
import styled from "styled-components"

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

interface AuthProvidersProps extends Omit<BoxProps, "children"> {
  authMethodId: AuthMethodId
}

const AuthProviders = ({
  className,
  authMethodId,
  ...props
}: AuthProvidersProps) => {
  return (
    <Wrapper className={className} {...props}>
      <ButtonAuthProvider authProviderId="google" authMethodId={authMethodId} />
      <ButtonAuthProvider authProviderId="github" authMethodId={authMethodId} />
      <ButtonAuthProvider
        authProviderId="linkedin"
        authMethodId={authMethodId}
      />
    </Wrapper>
  )
}

export default AuthProviders
