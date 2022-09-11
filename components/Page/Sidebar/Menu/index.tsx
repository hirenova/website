import Box, { BoxProps } from "components/Box"
import { Navigation } from "navigation"
import styled from "styled-components"

import Item from "./Item"

const Wrapper = styled(Box)`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
`

export interface MenuProps extends BoxProps {
  navigation: Navigation
}

const Menu = ({ className, navigation, ...props }: MenuProps) => {
  return (
    <Wrapper className={className} {...props}>
      {navigation.map((item, index) => (
        <Item key={index} redirect={item.redirect}>
          {item.children}
        </Item>
      ))}
    </Wrapper>
  )
}

export default Menu
