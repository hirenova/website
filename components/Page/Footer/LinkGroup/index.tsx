import Box, { BoxProps } from "components/Box"
import styled from "styled-components"

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`

const Label = styled(Box)`
  font-weight: bold;
`

const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

interface LinkGroupProps extends BoxProps {
  label: string
}

const LinkGroup = ({ className, children, label }: LinkGroupProps) => {
  return (
    <Wrapper className={className}>
      <Label>{label}</Label>
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default LinkGroup
