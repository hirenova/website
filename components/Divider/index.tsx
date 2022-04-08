import {
  Divider as ChakraDivider,
  DividerProps as ChakraDividerProps,
} from "@chakra-ui/react";
import styled from "styled-components";

const Wrapper = styled(ChakraDivider)`
  border-bottom: 1px solid black;
  opacity: 0.2;
`;

interface DividerProps extends ChakraDividerProps {}

const Divider = ({ className, ...props }: DividerProps) => {
  return <Wrapper className={className} {...props} />;
};

export default Divider;
