import {
  InputGroup as ChakraInputGroup,
  InputGroupProps as ChakraInputGroupProps,
} from "@chakra-ui/react";
import styled from "styled-components";

const Wrapper = styled(ChakraInputGroup)``;

interface InputGroupProps extends ChakraInputGroupProps {}

const InputGroup = ({ className, children, ...props }: InputGroupProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default InputGroup;
