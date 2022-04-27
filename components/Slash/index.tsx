import { BoxProps } from "@chakra-ui/react";
import Box from "components/Box";
import styled from "styled-components";

const Wrapper = styled(Box)`
  display: inline-block;
  opacity: 0.7;
`;

interface SlashProps extends Omit<BoxProps, "children"> {}

const Slash = ({ className, ...props }: SlashProps) => {
  return (
    <Wrapper className={className} {...props}>
      /
    </Wrapper>
  );
};

export default Slash;
