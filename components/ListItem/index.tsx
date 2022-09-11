import {
  ListItem as ChakraListItem,
  ListItemProps as ChakraListItemProps,
} from "@chakra-ui/react"
import styled from "styled-components"

const Wrapper = styled(ChakraListItem)``

export interface ListItemProps extends ChakraListItemProps {}

const ListItem = ({ className, children, ...props }: ListItemProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  )
}

export default ListItem
