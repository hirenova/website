import Box, { BoxProps } from "components/Box";
import styled from "styled-components";

import Statistics from "./Statistics";

const Wrapper = styled(Box)`
  flex: 1;
`;

interface ContentProps extends BoxProps {}

const Content = ({ className, ...props }: ContentProps) => {
  return (
    <Wrapper className={className} {...props}>
      <Statistics />
    </Wrapper>
  );
};

export default Content;
