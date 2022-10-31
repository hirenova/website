import NextLink from "next/link"
import styled from "styled-components"

export interface LinkProps {
  className?: string
  children: React.ReactNode
  href: string
  target?: "_blank"
}

const Wrapper = styled(NextLink)``

const A = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`

const Link = ({ className, children, href, target }: LinkProps) => {
  return (
    <Wrapper href={href} passHref>
      <A className={className} target={target} rel={"noopener noreferrer"}>
        {children}
      </A>
    </Wrapper>
  )
}

export default Link
