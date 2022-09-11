import Box, { BoxProps } from "components/Box"
import ButtonsAuth, { ButtonsAuthProps } from "components/ButtonsAuth"
import { Navigation } from "navigation"
import styled from "styled-components"

import Logo from "./Logo"
import MenuButton from "./MenuButton"
import MenuItems from "./MenuItems"

const Wrapper = styled(Box)`
  display: flex;
  position: absolute;
  align-items: center;
  background: white;
  width: 100vw;
  max-width: 100%;
  top: 0px;
  padding: 0 30px;
  height: 80px;
  gap: 100px;
  box-shadow: 0 5px 15px rgb(64 79 104 / 5%);
  z-index: 11;
`

const ButtonsAuthResponsive = styled(ButtonsAuth)`
  margin-left: auto;
  @media (max-width: 1300px) {
    display: none;
  }
`

export interface HeaderProps extends BoxProps, ButtonsAuthProps {
  navigation: Navigation
}

const Header = ({
  className,
  navigation,
  showLogin,
  showLogout,
  showSignUp,
  ...props
}: HeaderProps) => {
  return (
    <Wrapper className={className} {...props}>
      <Logo />
      <MenuItems navigation={navigation} />
      <ButtonsAuthResponsive
        showLogin={showLogin}
        showLogout={showLogout}
        showSignUp={showSignUp}
      />
      <MenuButton />
    </Wrapper>
  )
}

export default Header
