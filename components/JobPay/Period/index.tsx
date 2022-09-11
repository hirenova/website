import Box, { BoxProps } from "components/Box"
import styled from "styled-components"

const Wrapper = styled(Box)`
  display: inline-block;
  opacity: 0.7;
`

type PeriodId = "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR"

const formattedPeriod: { [key in PeriodId]: string } = {
  HOUR: "Hour",
  DAY: "Day",
  WEEK: "Week",
  MONTH: "Month",
  YEAR: "Year",
}

export interface PeriodProps extends Omit<BoxProps, "children"> {
  periodId?: PeriodId
}

const Period = ({ className, periodId, ...props }: PeriodProps) => {
  return (
    <Wrapper className={className} {...props}>
      {periodId ? formattedPeriod[periodId] : "?"}
    </Wrapper>
  )
}

export default Period
