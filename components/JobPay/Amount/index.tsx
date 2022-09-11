import Box, { BoxProps } from "components/Box"
import styled from "styled-components"

const Wrapper = styled(Box)`
  display: inline-block;
  color: #5192ff;
  font-size: 24px;
  font-weight: 700;
`

export interface AmountProps extends Omit<BoxProps, "children"> {
  amount?: number
}

const Amount = ({ className, amount, ...props }: AmountProps) => {
  return (
    <Wrapper className={className} {...props}>
      {amount ? amount : null}
    </Wrapper>
  )
}

export default Amount
