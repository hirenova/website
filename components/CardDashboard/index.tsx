import Card, { CardProps } from "components/Card";
import CardContent from "components/CardContent";
import CardLabel from "components/CardLabel";
import styled from "styled-components";

const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardLabelDashboard = styled(CardLabel)``;

const CardContentDashboard = styled(CardContent)``;

export interface CardDashboardProps extends CardProps {
  label: React.ReactNode;
}

const CardDashboard = ({
  className,
  children,
  label,
  ...props
}: CardDashboardProps) => {
  return (
    <Wrapper className={className} {...props}>
      <CardLabelDashboard size={"lg"}>{label}</CardLabelDashboard>
      <CardContentDashboard>{children}</CardContentDashboard>
    </Wrapper>
  );
};

export default CardDashboard;
