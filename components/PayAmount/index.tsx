import Box, { BoxProps } from "components/Box";
import styled from "styled-components";

const Wrapper = styled(Box)`
  display: inline-block;
  color: #5192ff;
  font-size: 24px;
  font-weight: 700;
`;

export type PayAmountType = number;

export interface PayAmountProps extends Omit<BoxProps, "children"> {
  amount: PayAmountType;
}

const PayAmount = ({ className, amount, ...props }: PayAmountProps) => {
  return (
    <Wrapper className={className} {...props}>
      ${amount}
    </Wrapper>
  );
};

export default PayAmount;
