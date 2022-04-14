import BoxNavigation, { BoxNavigationProps } from "components/BoxNavigation";
import styled from "styled-components";

import Item from "./Item";

const Wrapper = styled(BoxNavigation)`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 200px;
`;

interface MenuProps extends BoxNavigationProps {}

const Menu = ({ className, navigation, ...props }: MenuProps) => {
  return (
    <Wrapper className={className} {...props}>
      {navigation.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </Wrapper>
  );
};

export default Menu;
