import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0px;
  height: 100px;
  width: 100vw;
  padding: 25px 50px;
  box-shadow: 0 0 25px 0 rgb(0 0 0 / 4%);
  background: white;
`;

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return <Wrapper>Header</Wrapper>;
};

export default Header;
