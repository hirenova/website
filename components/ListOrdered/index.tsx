import {
  OrderedList as ChakraListOrdered,
  ListProps as ChakraListProps,
} from "@chakra-ui/react"
import styled from "styled-components"

const Wrapper = styled(ChakraListOrdered)``

interface ListOrderedProps extends ChakraListProps {}

const ListOrdered = ({ className, children, ...props }: ListOrderedProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  )
}

export default ListOrdered
