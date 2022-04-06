import Box, { BoxProps } from "components/Box";
import ButtonsAuth, { ButtonsAuthProps } from "components/ButtonsAuth";
import useClickAway from "hooks/useClickAway";
import usePage from "hooks/usePage";
import styled, { css } from "styled-components";

import Menu from "./Menu";

interface StyledSidebarProps extends BoxProps {
  open: boolean;
}

const Wrapper = styled(Box)<StyledSidebarProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100vh;
  padding-top: calc(75px + 30px);
  z-index: 10;
  background: white;
  box-shadow: 5px 0 15px rgb(64 79 104 / 5%);
  left: -400px;
  ${({ open }) =>
    open
      ? css`
          @media (max-width: 1300px) {
            transform: translateX(100%);
          }
        `
      : css``}
  transition: 0.3s;
`;

const SidebarContent = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const StyledButtonsAuth = styled(ButtonsAuth)`
  padding: 20px 40px;
`;

interface SidebarProps extends ButtonsAuthProps {
  navigation: object;
}

const Sidebar = ({
  className,
  navigation,
  showLogin,
  showLogout,
  showSignUp,
}: SidebarProps) => {
  const { sidebarOpen, setSidebarOpen } = usePage();

  const onClickAway = () => {
    console.log("callback");
    setSidebarOpen(false);
  };

  const { ref } = useClickAway(onClickAway);

  return (
    <Wrapper as="div" ref={ref} open={sidebarOpen}>
      <SidebarContent className={className}>
        <Menu navigation={navigation} />
        <StyledButtonsAuth
          showLogin={showLogin}
          showLogout={showLogout}
          showSignUp={showSignUp}
        />
      </SidebarContent>
    </Wrapper>
  );
};

export default Sidebar;
