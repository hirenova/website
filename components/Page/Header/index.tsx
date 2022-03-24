import styled from "styled-components";

import Logo from "./Logo";
import MenuButton from "./MenuButton";
import MenuItems from "./MenuItems";

const Wrapper = styled.div`
  /* position: fixed; */
  display: flex;
  align-items: center;
  top: 0px;
  width: 100vw;
  padding: 15px 30px;
  gap: 100px;
  /* background: white; */
  /* box-shadow: 0 5px 15px rgb(64 79 104 / 5%); */
  z-index: 11;
`;

interface HeaderProps {
  navigation: object;
}

const Header = ({ navigation }: HeaderProps) => {
  return (
    <Wrapper>
      <Logo />
      <MenuItems navigation={navigation} />
      <MenuButton />
    </Wrapper>
  );
};

export default Header;
