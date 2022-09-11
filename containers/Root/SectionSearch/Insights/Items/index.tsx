import styled from "styled-components"

const Wrapper = styled.div``

interface ItemsProps {
  className?: string
  children: React.ReactNode
}

const Items = ({ className, children }: ItemsProps) => {
  return <Wrapper className={className}>{children}</Wrapper>
}

export default Items
