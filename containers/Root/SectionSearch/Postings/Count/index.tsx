import Box, { BoxProps } from "components/Box";
import useApp from "hooks/useApp";
import styled from "styled-components";

const Wrapper = styled(Box)`
  display: inline;
`;

interface CountProps extends BoxProps {}

const Count = ({ className }: CountProps) => {
  const { jobsCollectionData } = useApp();

  return <Wrapper className={className}>{jobsCollectionData?.length}</Wrapper>;
};

export default Count;
