import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
} from "@chakra-ui/react";

interface ContainerProps extends ChakraContainerProps {}

const Container = ({ className }: ContainerProps) => {
  return <ChakraContainer className={className}>Container</ChakraContainer>;
};

export default Container;
