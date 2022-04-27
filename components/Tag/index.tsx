import { Tag as ChakraTag, TagProps as ChakraTagProps } from "@chakra-ui/react";
import styled from "styled-components";

const Wrapper = styled(ChakraTag)`
  width: fit-content;
`;

export interface TagProps extends ChakraTagProps {}

const Tag = ({ className, children, ...props }: TagProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default Tag;
