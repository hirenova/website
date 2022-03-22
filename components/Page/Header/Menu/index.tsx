import styled from "styled-components";

import Item from "./Item";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

interface MenuProps {
  className?: string;
}

const Menu = ({ className }: MenuProps) => {
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

export default Menu;
