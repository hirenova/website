import ButtonNavigation, {
  ButtonNavigationProps,
} from "components/ButtonNavigation";
import styled from "styled-components";

const Wrapper = styled(ButtonNavigation)`
  padding: 10px 20px;
  font-size: 18px;
  :hover {
    background: #c8e3f3;
  }
`;

interface ItemProps extends ButtonNavigationProps {}

const Item = ({ className, ...props }: ItemProps) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Item;
