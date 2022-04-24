import {
  FormLabel as ChakraFormLabel,
  FormLabelProps as ChakraFormLabelProps,
} from "@chakra-ui/react";
import styled from "styled-components";

const Wrapper = styled(ChakraFormLabel)``;

export interface FormLabelProps extends ChakraFormLabelProps {}

const FormLabel = ({ className, children, ...props }: FormLabelProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default FormLabel;
