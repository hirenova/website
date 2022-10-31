import Box, { BoxProps } from "components/Box"
import styled from "styled-components"

import Link from "./Link"
import LinkGroup from "./LinkGroup"

interface FooterProps extends BoxProps {}

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding: 20px 5%;
  gap: 20px;
  border-top: 1px solid lightgrey;
`

const LinkGroups = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 300px) {
    grid-template-columns: 1fr;
  }
  width: 100%;
`
const Copyright = styled(Box)``

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <Wrapper className={className} {...props}>
      <LinkGroups>
        <LinkGroup label="Pages">
          <Link href="/">Home</Link>
          <Link href="/candidates">Candidates</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/contact">Referrers</Link>
          <Link href="/contact">How it works</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </LinkGroup>
        <LinkGroup label="Company">
          <Link href="/">Careers</Link>
        </LinkGroup>
        <LinkGroup label="Socials">
          <Link href="https://www.instagram.com/hirenova_ireland/">
            Instagram
          </Link>
          <Link href="/">LinkedIn</Link>
          <Link href="https://www.facebook.com/HireNovaDublin/">Facebook</Link>
          <Link href="/">Twitter</Link>
        </LinkGroup>
        <LinkGroup label="Legal">
          <Link href="/">Data Protection</Link>
          <Link href="/">Terms & Conditions</Link>
        </LinkGroup>
      </LinkGroups>
      <Copyright>© 2022 HireNova</Copyright>
    </Wrapper>
  )
}

export default Footer
