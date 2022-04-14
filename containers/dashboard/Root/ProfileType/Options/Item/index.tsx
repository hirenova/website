import Card, { CardProps } from "components/Card";
import styled from "styled-components";

const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

interface ItemProps extends CardProps {}

const Item = ({ className, children, ...props }: ItemProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default Item;
