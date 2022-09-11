import {
  CheckboxGroup as ChakraCheckboxGroup,
  CheckboxGroupProps as ChakraCheckboxGroupProps,
} from "@chakra-ui/react"
import Box, { BoxProps } from "components/Box"
import styled from "styled-components"

const Wrapper = styled(ChakraCheckboxGroup)``

interface CheckboxGroupProps
  extends ChakraCheckboxGroupProps,
    Pick<BoxProps, "className"> {}

const CheckboxGroup = ({
  className,
  children,
  ...props
}: CheckboxGroupProps) => {
  return (
    <Wrapper {...props}>
      <Box className={className}>{children}</Box>
    </Wrapper>
  )
}

export default CheckboxGroup
