import Box, { BoxProps } from "components/Box"
import Spinner from "components/Spinner"
import styled from "styled-components"

const Wrapper = styled(Box)`
  margin: auto;
  display: flex;
`

interface LoadingProps extends BoxProps {}

const Loading = ({ className, ...props }: LoadingProps) => {
  return (
    <Wrapper className={className} {...props}>
      <Spinner size={"xl"} />
    </Wrapper>
  )
}

export default Loading
