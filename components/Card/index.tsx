import Box, { BoxProps } from "components/Box";
import styled from "styled-components";

const Wrapper = styled(Box)`
  border: 1px solid lightgrey;
  border-radius: 12px;
  padding: 0.75rem;
`;

interface CardProps extends BoxProps {}

const Card = ({ className, ...props }: CardProps) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Card;
