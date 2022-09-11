import ButtonNavigation, {
  ButtonNavigationProps,
} from "components/ButtonNavigation"
import styled from "styled-components"

const Wrapper = styled(ButtonNavigation)`
  padding: 20px 40px;
`

interface ItemProps extends ButtonNavigationProps {}

const Item = ({ className, ...props }: ItemProps) => {
  return <Wrapper className={className} {...props} />
}

export default Item
