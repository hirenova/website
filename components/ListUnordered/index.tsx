import {
  ListProps as ChakraListProps,
  UnorderedList as ChakraListUnordered,
} from "@chakra-ui/react";
import styled from "styled-components";

const Wrapper = styled(ChakraListUnordered)``;

export interface ListUnorderedProps extends ChakraListProps {}

const ListUnordered = ({
  className,
  children,
  ...props
}: ListUnorderedProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default ListUnordered;
