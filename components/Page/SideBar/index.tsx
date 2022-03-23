import usePage from "hooks/usePage";
import styled, { css } from "styled-components";

interface StyledSideBarProps {
  className?: string;
  open: boolean;
}

const Wrapper = styled.div<StyledSideBarProps>`
  position: fixed;
  width: 400px;
  height: 100vh;
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
}

const SideBar = ({ className }: SideBarProps) => {
  const { sideBarOpen } = usePage();
  return (
    <Wrapper className={className} open={sideBarOpen}>
      SideBar
    </Wrapper>
  );
};

export default SideBar;
