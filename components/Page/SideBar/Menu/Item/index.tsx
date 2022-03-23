import Link, { LinkProps } from "components/Link";
import styled, { css } from "styled-components";

const Wrapper = styled(Link)<LinkProps & { current: boolean }>`
  padding: 15px 50px;
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

interface ItemProps {
  children: string;
  className?: string;
  href: string;
}

const Item = ({ className, children, ...props }: ItemProps) => {
  return (
    <Wrapper className={className} current={false} {...props}>
      {children}
    </Wrapper>
  );
};

export default Item;
