import AuthProviders from "components/AuthProviders"
import Box, { BoxProps } from "components/Box"
import Heading from "components/Heading"
import useAuth from "hooks/useAuth"
import styled from "styled-components"

import EmailPassword from "./EmailPassword"

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
`

const Modes = styled(Box)`
  display: flex;
  gap: 100px;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const Separator = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media (min-width: 800px) {
    flex-direction: column;
  }
  color: lightgrey;
`

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
`

interface BoxSignUpProps extends Omit<BoxProps, "children"> {}

const BoxSignUp = ({ className }: BoxSignUpProps) => {
  const { session } = useAuth()

  return (
    <Wrapper className={className}>
      <Modes>
        <AuthProviders authMethodId="sign_up" />
        <Separator>
          <SeparatorLine />
          <Heading size="md">or</Heading>
          <SeparatorLine />
        </Separator>
        <EmailPassword />
      </Modes>
      {session ? "logged in" : "logged out"}
    </Wrapper>
  )
}

export default BoxSignUp
