import BoxNavigation, { BoxNavigationProps } from "components/BoxNavigation";
import styled from "styled-components";

import Item, { ItemProps } from "./Item";

const Wrapper = styled(BoxNavigation)`
  display: flex;
  flex-direction: column;
`;

export interface MenuProps extends Omit<BoxNavigationProps, "buttonAs"> {}

const Menu = ({ className, children, ...props }: MenuProps) => {
  return (
    <Wrapper className={className} buttonAs={Item} {...props}>
      {children}
    </Wrapper>
  );
};

export default Menu;
