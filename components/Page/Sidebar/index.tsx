import Box, { BoxProps } from "components/Box";
import ButtonsAuth, { ButtonsAuthProps } from "components/ButtonsAuth";
import Divider from "components/Divider";
import { auth } from "config/firebase";
import useApp from "hooks/useApp";
import useClickAway from "hooks/useClickAway";
import { useAuthState } from "react-firebase-hooks/auth";
import styled, { css } from "styled-components";

import Menu, { MenuProps } from "./Menu";

interface StyledSidebarProps extends BoxProps {
  open: boolean;
}

const Wrapper = styled(Box)<StyledSidebarProps>`
  position: fixed;
  overflow: auto;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: calc(100vh - 80px);

  margin-top: 80px;
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

export interface SidebarProps
  extends ButtonsAuthProps,
    Pick<MenuProps, "navigation"> {}

const Sidebar = ({
  className,
  navigation,
  showLogin,
  showLogout,
  showSignUp,
}: SidebarProps) => {
  const { sidebarOpen, setSidebarOpen } = useApp();

  const [user] = useAuthState(auth);

  const onClickAway = () => {
    setSidebarOpen(false);
  };

  const { ref } = useClickAway(onClickAway);

  return (
    <Wrapper as="div" ref={ref} open={sidebarOpen}>
      <SidebarContent className={className}>
        <Menu
          navigation={navigation.filter(
            (item) => !item.redirect?.pathname?.startsWith("/dashboard/")
          )}
        />
        {user ? (
          <>
            <Divider />
            <Menu
              navigation={navigation.filter((item) =>
                item.redirect?.pathname?.startsWith("/dashboard/")
              )}
            />
          </>
        ) : null}
        <Divider />
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
