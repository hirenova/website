import {
  FormControl as ChakraFormControl,
  FormControlProps as ChakraFormControlProps,
} from "@chakra-ui/react"
import styled from "styled-components"

const Wrapper = styled(ChakraFormControl)``

interface FormControlProps extends ChakraFormControlProps {}

const FormControl = ({ className, ...props }: FormControlProps) => {
  return <Wrapper className={className} {...props} />
}

export default FormControl
