import Box, { BoxProps } from "components/Box";
import styled from "styled-components";

const Wrapper = styled(Box)`
  flex: 1;
  /* overflow: auto; */
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

interface ContentProps extends BoxProps {}

const Content = ({ className, children, ...props }: ContentProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default Content;
