import {
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from "@chakra-ui/react"
import styled from "styled-components"

const Wrapper = styled(ChakraSelect)``

interface SelectProps extends ChakraSelectProps {}

const Select = ({ className, ...props }: SelectProps) => {
  return <Wrapper className={className} {...props}></Wrapper>
}

export default Select
