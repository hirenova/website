import Box, { BoxProps } from "components/Box"
import styled from "styled-components"

const Wrapper = styled(Box)`
  display: inline-block;
  color: #5192ff;
  font-size: 24px;
  font-weight: 700;
`

type CurrencyId = "USD" | "EUR" | "GBP"

export interface CurrencyProps extends Omit<BoxProps, "children"> {
  currencyId?: CurrencyId
}

const currencySymbols: { [key in CurrencyId]: string } = {
  EUR: "€",
  GBP: "£",
  USD: "$",
}

const Currency = ({ className, currencyId, ...props }: CurrencyProps) => {
  return (
    <Wrapper className={className} {...props}>
      {currencyId ? currencySymbols[currencyId] : ""}
    </Wrapper>
  )
}

export default Currency
