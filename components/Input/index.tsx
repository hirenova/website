import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import styled from "styled-components";

const Wrapper = styled(ChakraInput)``;

interface InputProps extends ChakraInputProps {}

const Input = ({ className, ...props }: InputProps) => {
  return <Wrapper className={className} {...props} />;
};

export default Input;
