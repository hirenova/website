import styled from "styled-components";

import Item from "./Item";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface MenuProps {
  className?: string;
  navigation: object;
}

const Menu = ({ className, navigation }: MenuProps) => {
  return (
    <Wrapper className={className}>
      {Object.entries(navigation).map(([id, item]) => (
        <Item key={id} href={item.href}>
          {item.label}
        </Item>
      ))}
    </Wrapper>
  );
};

export default Menu;
