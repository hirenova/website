import styled from "styled-components";

import Item from "./Item";

const Wrapper = styled.div`
  @media (min-width: 1300px) {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  @media (max-width: 1300px) {
    display: none;
  }
`;

interface MenuItemsProps {
  className?: string;
}

const MenuItems = ({ className }: MenuItemsProps) => {
  return (
    <Wrapper className={className}>
      <Item href="/">Home</Item>
      <Item href="/candidates">Candidates</Item>
      <Item href="/jobs">Jobs</Item>
      <Item href="/contact">Contact</Item>
      <Item href="/about">About</Item>
      <Item href="/login">Log In</Item>
      <Item href="/signup">Sign Up</Item>
    </Wrapper>
  );
};

export default MenuItems;
