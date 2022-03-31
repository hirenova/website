import styled from "styled-components";

import Auth from "./Auth";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import MenuItems from "./MenuItems";

// import AuthButtons from "./AuthButtons";

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  background: white;
  width: 100vw;
  top: 0px;
  padding: 0 30px;
  height: 80px;
  gap: 100px;
  box-shadow: 0 5px 15px rgb(64 79 104 / 5%);
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
      <Auth />
      <MenuButton />
    </Wrapper>
  );
};

export default Header;
