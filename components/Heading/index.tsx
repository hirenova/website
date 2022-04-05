import {
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
} from "@chakra-ui/react";

interface HeadingProps extends ChakraHeadingProps {}

const Heading = ({ ...props }: HeadingProps) => {
  return <ChakraHeading {...props} />;
};

export default Heading;
