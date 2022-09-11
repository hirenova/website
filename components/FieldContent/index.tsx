import Box, { BoxProps } from "components/Box"
import styled from "styled-components"

const Wrapper = styled(Box)``

interface FieldContentProps extends BoxProps {}

const FieldContent = ({ className, children, ...props }: FieldContentProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  )
}

export default FieldContent
