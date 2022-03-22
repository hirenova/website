import NextLink from "next/link";
import styled from "styled-components";

export interface LinkProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

const Wrapper = styled(NextLink)``;

const A = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

const Link = ({ className, children, href }: LinkProps) => {
  return (
    <Wrapper href={href} passHref>
      <A className={className}>{children}</A>
    </Wrapper>
  );
};

export default Link;
