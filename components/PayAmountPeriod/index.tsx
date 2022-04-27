import Box, { BoxProps } from "components/Box";
import PayAmount, { PayAmountType } from "components/PayAmount";
import PayPeriod, { PayPeriodIdType } from "components/PayPeriod";
import Slash from "components/Slash";
import styled from "styled-components";

const Wrapper = styled(Box)``;

interface PayAmountPeriodProps extends BoxProps {
  amount: PayAmountType;
  period: PayPeriodIdType;
}

const PayAmountPeriod = ({
  className,
  children,
  amount,
  period,
  ...props
}: PayAmountPeriodProps) => {
  return (
    <Wrapper className={className} {...props}>
      <PayAmount amount={amount} />
      <Slash />
      <PayPeriod period={period} />
    </Wrapper>
  );
};

export default PayAmountPeriod;
