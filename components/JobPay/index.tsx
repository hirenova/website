import Box, { BoxProps } from "components/Box"
import Slash from "components/Slash"
import styled from "styled-components"

import Amount, { AmountProps } from "./Amount"
import Currency, { CurrencyProps } from "./Currency"
import Period, { PeriodProps } from "./Period"

const Wrapper = styled(Box)`
  height: 36px;
`

interface JobPay {
  amount: AmountProps["amount"]
  currencyId: CurrencyProps["currencyId"]
  periodId: PeriodProps["periodId"]
}

interface JobPayProps extends Omit<BoxProps, "children"> {
  pay: JobPay
}

const JobPay = ({ className, pay, ...props }: JobPayProps) => {
  return (
    <Wrapper className={className} {...props}>
      <Currency currencyId={pay.currencyId} />
      <Amount amount={pay.amount} />
      {pay.periodId ? (
        <>
          <Slash />
          <Period periodId={pay.periodId} />
        </>
      ) : null}
    </Wrapper>
  )
}

export default JobPay
