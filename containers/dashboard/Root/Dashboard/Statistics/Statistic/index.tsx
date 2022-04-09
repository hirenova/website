import Card, { CardProps } from "components/Card";
import styled from "styled-components";

const Wrapper = styled(Card)`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto;
  justify-content: space-between;
  justify-items: right;
  align-items: center;
  padding: 20px;
`;

interface StatisticProps extends CardProps {}

const Statistic = ({ className, children, ...props }: StatisticProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default Statistic;
