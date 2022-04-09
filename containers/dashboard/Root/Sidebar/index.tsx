import Box, { BoxProps } from "components/Box";
import { navigation } from "components/Page";
import styled from "styled-components";

import Menu from "./Menu";
import Profile from "./Profile";

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  @media (max-width: 700px) {
    display: none;
  }
`;

interface SidebarProps extends BoxProps {}

const Sidebar = ({ className, ...props }: SidebarProps) => {
  return (
    <Wrapper className={className} {...props}>
      <Profile />
      <Menu
        navigation={navigation.filter((item) =>
          item.redirect?.pathname?.startsWith("/dashboard/")
        )}
      />
    </Wrapper>
  );
};

export default Sidebar;
