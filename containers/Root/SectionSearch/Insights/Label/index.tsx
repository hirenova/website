import styled from "styled-components"

const Wrapper = styled.div`
  font-weight: 500;
`

interface LabelProps {
  className?: string
  children: React.ReactNode
}

const Label = ({ className, children }: LabelProps) => {
  return <Wrapper className={className}>{children}</Wrapper>
}

export default Label
