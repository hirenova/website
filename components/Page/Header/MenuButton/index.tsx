import usePage from "hooks/usePage";
import { MouseEventHandler, useEffect, useState } from "react";
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
  const { sideBarOpen, setSideBarOpen } = usePage();
  const [freeze, setFreeze] = useState<boolean>();

  const onClick: MouseEventHandler<HTMLImageElement> = (event) => {
    if (!freeze) setSideBarOpen(!sideBarOpen);
  };

  useEffect(() => {
    setFreeze(true);
    setTimeout(() => {
      setFreeze(false);
    }, 100);
  }, [sideBarOpen]);

  return (
    <Wrapper
      className={className}
      src={sideBarOpen ? "close.webp" : "menu.webp"}
      onClick={onClick}
    />
  );
};

export default MenuButton;
