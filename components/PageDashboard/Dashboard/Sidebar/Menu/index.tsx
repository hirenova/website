import Box, { BoxProps } from "components/Box"
import { Navigation } from "navigation"
import styled from "styled-components"

import Item from "./Item"

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 200px;
`

interface MenuProps extends Omit<BoxProps, "children"> {
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
