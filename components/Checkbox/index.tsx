import {
  Checkbox as ChakraCheckbox,
  CheckboxProps as ChakraCheckboxProps,
} from "@chakra-ui/react"
import styled from "styled-components"

const Wrapper = styled(ChakraCheckbox)``

interface CheckboxProps extends ChakraCheckboxProps {}

const Checkbox = ({ className, ...props }: CheckboxProps) => {
  return <Wrapper className={className} {...props}></Wrapper>
}

export default Checkbox
