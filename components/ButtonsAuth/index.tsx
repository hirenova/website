import Box, { BoxProps } from "components/Box"
import useAuth from "hooks/useAuth"
import styled from "styled-components"

import Login from "./Login"
import Logout from "./Logout"
import SignUp from "./SignUp"

const Wrapper = styled(Box)`
  display: flex;
  gap: 20px;
  align-items: center;
`

export interface ButtonsAuthProps extends BoxProps {
  showLogout: boolean
  showLogin: boolean
  showSignUp: boolean
}

const ButtonsAuth = ({
  className,
  showLogin,
  showSignUp,
  showLogout,
  ...props
}: ButtonsAuthProps) => {
  const { user } = useAuth()

  return (
    <Wrapper className={className} {...props}>
      {user === undefined ? null : user ? (
        <>{showLogout ? <Logout /> : null}</>
      ) : (
        <>
          {showLogin ? <Login /> : null}
          {showSignUp ? <SignUp /> : null}
        </>
      )}
    </Wrapper>
  )
}

export default ButtonsAuth
