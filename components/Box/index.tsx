import { Box as ChakraBox, BoxProps as ChakraBoxProps } from "@chakra-ui/react";
import styled from "styled-components";

const Wrapper = styled(ChakraBox)<ChakraBoxProps>``;

export interface BoxProps extends ChakraBoxProps {}

const Box = ({ ...props }: BoxProps) => {
  return <Wrapper {...props} />;
};

export default Box;
