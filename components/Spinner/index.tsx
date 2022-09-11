import {
  Spinner as ChakraSpinner,
  SpinnerProps as ChakraSpinnerProps,
} from "@chakra-ui/react"
import styled from "styled-components"

const Wrapper = styled(ChakraSpinner)``

interface SpinnerProps extends ChakraSpinnerProps {}

const Spinner = ({ className, ...props }: SpinnerProps) => {
  return <Wrapper className={className} {...props} />
}

export default Spinner
