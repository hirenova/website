import Box, { BoxProps } from "components/Box"
import styled from "styled-components"

const Wrapper = styled(Box)``

export interface FieldProps extends BoxProps {}

const Field = ({ className, children, ...props }: FieldProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  )
}

export default Field
