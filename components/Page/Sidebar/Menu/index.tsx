import Box, { BoxProps } from "components/Box";
import styled from "styled-components";

import Item from "./Item";

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

interface MenuProps extends BoxProps {
  navigation: object;
}

const Menu = ({ className, navigation, ...props }: MenuProps) => {
  return (
    <Wrapper className={className} {...props}>
      {Object.entries(navigation).map(([id, item]) => (
        <Item key={id} redirect={item.href}>
          {item.label}
        </Item>
      ))}
    </Wrapper>
  );
};

export default Menu;
