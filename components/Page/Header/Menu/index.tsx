import styled from "styled-components";

const Wrapper = styled.div``;

interface MenuProps {
  className: string;
}

const Menu = ({ className }: MenuProps) => {
  return <Wrapper className={className}>Menu</Wrapper>;
};

export default Menu;
