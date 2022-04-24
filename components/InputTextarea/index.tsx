import {
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";
import styled from "styled-components";

const Wrapper = styled(ChakraTextarea)``;

interface InputTextareaProps extends ChakraTextareaProps {}

const InputTextarea = ({
  className,
  children,
  ...props
}: InputTextareaProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default InputTextarea;
