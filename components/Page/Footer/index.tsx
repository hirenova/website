import Box, { BoxProps } from "components/Box"
import styled from "styled-components"

interface FooterProps extends BoxProps {}

const Wrapper = styled(Box)`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  background: #eee;
`

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <Wrapper className={className} {...props}>
      Footer
    </Wrapper>
  )
}

export default Footer
