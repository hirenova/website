import ButtonNavigation, {
  ButtonNavigationProps,
} from "components/ButtonNavigation";
import Link, { LinkProps } from "components/Link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

const Wrapper = styled(ButtonNavigation)`
  height: 100%;
  padding: 10px;
  transition: 0.2s;
  font-weight: 500;
`;

interface ItemProps extends ButtonNavigationProps {}

const Item = ({ className, children, ...props }: ItemProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default Item;
