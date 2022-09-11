import Box, { BoxProps } from "components/Box"
import styled from "styled-components"

const Wrapper = styled(Box)`
  font-size: 18px;
  font-weight: 500;
`

interface TitleProps extends BoxProps {}

const Title = ({ className, children, ...props }: TitleProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  )
}

export default Title
