import Box, { BoxProps } from "components/Box";
import styled from "styled-components";

const Wrapper = styled(Box)`
  /* border: 1px solid lightgrey; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 0.75rem;
  background: white;
`;

export interface CardProps extends BoxProps {}

const Card = ({ className, ...props }: CardProps) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Card;
