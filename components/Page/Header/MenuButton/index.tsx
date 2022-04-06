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
  const { sidebarOpen, setSidebarOpen } = usePage();
  const [freeze, setFreeze] = useState<boolean>();

  const onClick: MouseEventHandler<HTMLImageElement> = (event) => {
    if (!freeze) setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    setFreeze(true);
    setTimeout(() => {
      setFreeze(false);
    }, 100);
  }, [sidebarOpen]);

  return (
    <Wrapper
      className={className}
      src={sidebarOpen ? "close.webp" : "menu.webp"}
      onClick={onClick}
    />
  );
};

export default MenuButton;
