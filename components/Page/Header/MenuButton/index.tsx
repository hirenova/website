import usePage from "hooks/usePage";
import { MouseEventHandler } from "react";
import styled from "styled-components";

interface MenuButtonProps {
  className?: string;
}

const Wrapper = styled.img`
  height: 30px;
  cursor: pointer;
  @media (min-width: 1300px) {
    display: none;
  }
`;

const MenuButton = ({ className }: MenuButtonProps) => {
  const { setSideBarOpen } = usePage();

  const onClick: MouseEventHandler<HTMLImageElement> = (event) => {
    setSideBarOpen((sideBarOpen) => !sideBarOpen);
  };

  return <Wrapper className={className} src="menu.webp" onClick={onClick} />;
};

export default MenuButton;
