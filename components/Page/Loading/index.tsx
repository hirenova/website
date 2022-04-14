import Box, { BoxProps } from "components/Box";
import Spinner from "components/Spinner";
import styled from "styled-components";

const Wrapper = styled(Box)`
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

interface LoadingProps extends BoxProps {}

const Loading = ({ className, ...props }: LoadingProps) => {
  return (
    <Wrapper className={className} {...props}>
      <Spinner size={"xl"} />
    </Wrapper>
  );
};

export default Loading;
