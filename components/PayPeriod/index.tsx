import Box, { BoxProps } from "components/Box";
import styled from "styled-components";

const Wrapper = styled(Box)`
  display: inline-block;
  opacity: 0.7;
`;

export type PayPeriodIdType = "Year" | "Month" | "Week" | "Day" | "Hour";

export interface PayPeriodProps extends Omit<BoxProps, "children"> {
  period: PayPeriodIdType;
}

const PayPeriod = ({ className, period, ...props }: PayPeriodProps) => {
  return (
    <Wrapper className={className} {...props}>
      {period}
    </Wrapper>
  );
};

export default PayPeriod;
