import {
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps,
} from "@chakra-ui/react"
import styled from "styled-components"

const Wrapper = styled(ChakraSwitch)``

interface SwitchProps extends ChakraSwitchProps {}

const Switch = ({ className, ...props }: SwitchProps) => {
  return <Wrapper className={className} {...props} />
}

export default Switch
