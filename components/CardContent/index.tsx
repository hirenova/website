import Box, { BoxProps } from "components/Box";
import styled from "styled-components";

const Wrapper = styled(Box)``;

interface CardContentProps extends BoxProps {}

const CardContent = ({ className, ...props }: CardContentProps) => {
  return <Wrapper className={className} {...props} />;
};

export default CardContent;
