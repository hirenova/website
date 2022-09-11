import ListItemInitial, {
  ListItemProps as ListItemPropsInitial,
} from "components/ListItem"
import styled from "styled-components"

const Wrapper = styled(ListItemInitial)``

interface ListItemProps extends ListItemPropsInitial {}

const ListItem = ({ className, children, ...props }: ListItemProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  )
}

export default ListItem
