import Box, { BoxProps } from "components/Box"
import { Navigation } from "navigation"
import { useRouter } from "next/router"
import styled from "styled-components"

import Item from "./Item"

const Wrapper = styled(Box)`
  @media (min-width: 1300px) {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  @media (max-width: 1300px) {
    display: none;
  }
`

interface MenuItemsProps extends Omit<BoxProps, "children"> {
  navigation: Navigation
}

const MenuItems = ({ className, navigation, ...props }: MenuItemsProps) => {
  const router = useRouter()
  return (
    <Wrapper className={className} {...props}>
      {navigation.map((item, index) => (
        <Item
          key={index}
          redirect={item.redirect}
          highlight={item.redirect.pathname === router.pathname}
        >
          {item.children}
        </Item>
      ))}
    </Wrapper>
  )
}

export default MenuItems
