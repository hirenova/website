import BoxNavigation, { BoxNavigationProps } from "components/BoxNavigation";
import styled from "styled-components";

import Item from "./Item";

const Wrapper = styled(BoxNavigation)`
  @media (min-width: 1300px) {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  @media (max-width: 1300px) {
    display: none;
  }
`;

interface MenuItemsProps extends Omit<BoxNavigationProps, "buttonAs"> {}

const MenuItems = ({
  className,
  navigation,
  children,
  ...props
}: MenuItemsProps) => {
  return (
    <Wrapper className={className} {...props}>
      {navigation.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </Wrapper>
  );
};

export default MenuItems;
