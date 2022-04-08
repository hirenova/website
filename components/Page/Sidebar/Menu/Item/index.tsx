import ButtonNavigation, {
  ButtonNavigationProps,
} from "components/ButtonNavigation";
import styled from "styled-components";

const Wrapper = styled(ButtonNavigation)`
  justify-content: flex-start;
  /* background: white; */
  padding: 25px 40px;
`;

export interface ItemProps extends ButtonNavigationProps {}

const Item = ({ className, children, ...props }: ItemProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default Item;
