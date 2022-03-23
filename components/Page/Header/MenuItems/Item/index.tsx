import Link, { LinkProps } from "components/Link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

interface ItemProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

const Wrapper = styled(Link)<LinkProps & { current: boolean }>`
  height: 100%;
  padding: 12px 0;
  transition: 0.2s;
  :hover {
    color: #714cf8;
  }
  ${({ current }) =>
    current
      ? css`
          color: #714cf8;
        `
      : css``}
`;

const Item = ({ className, children, href }: ItemProps) => {
  const { pathname } = useRouter();
  return (
    <Wrapper
      className={className}
      href={href}
      current={href === "/" ? pathname === href : pathname.startsWith(href)}
    >
      {children}
    </Wrapper>
  );
};

export default Item;
