import useClickAway from "hooks/useClickAway";
import usePage from "hooks/usePage";
import { MutableRefObject, RefObject } from "react";
import styled, { ThemedStyledFunction, css } from "styled-components";

import Menu from "./Menu";

interface StyledSideBarProps
  extends Partial<ThemedStyledFunction<"div", any, {}, never>> {
  className?: string;
  children: React.ReactNode;
  open: boolean;
}

const Wrapper = styled.div<StyledSideBarProps>`
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
  transition: 0.3s
`;

interface SideBarProps {
  className?: string;
  navigation: object;
}

const SideBar = ({ className, navigation }: SideBarProps) => {
  const { sideBarOpen, setSideBarOpen } = usePage();

  const onClickAway = () => {
    console.log("callback");
    setSideBarOpen(false);
  };

  const { ref } = useClickAway(onClickAway);

  return (
    <Wrapper ref={ref} className={className} open={sideBarOpen}>
      <Menu navigation={navigation} />
    </Wrapper>
  );
};

export default SideBar;
