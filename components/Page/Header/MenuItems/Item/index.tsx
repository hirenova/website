import ButtonNavigation, {
  ButtonNavigationProps,
} from "components/ButtonNavigation";
import styled from "styled-components";

const Wrapper = styled(ButtonNavigation)`
  padding: 10px;
  transition: 0.2s;
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
