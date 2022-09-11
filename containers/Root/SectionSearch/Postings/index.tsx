import Box, { BoxProps } from "components/Box"
import styled from "styled-components"

import Count from "./Count"

const Wrapper = styled(Box)`
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 0.05em;
`

interface PostingsProps extends Omit<BoxProps, "children"> {}

const Postings = ({ className }: PostingsProps) => {
  return (
    <Wrapper className={className}>
      There Are <Count /> Jobs Waiting For You!
    </Wrapper>
  )
}

export default Postings
