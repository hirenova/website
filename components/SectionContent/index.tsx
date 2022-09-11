import Box, { BoxProps } from "components/Box"
import styled from "styled-components"

const Wrapper = styled(Box)``

interface SectionContentProps extends BoxProps {}

const SectionContent = ({
  className,
  children,
  ...props
}: SectionContentProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  )
}

export default SectionContent
