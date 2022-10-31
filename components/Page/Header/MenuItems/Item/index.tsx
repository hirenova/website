import ButtonNavigation, {
  ButtonNavigationProps,
} from "components/ButtonNavigation"
import styled, { css } from "styled-components"

const Wrapper = styled(ButtonNavigation)<ItemProps>`
  padding: 10px;
  transition: 0.2s;

  ${({ highlight }) =>
    highlight
      ? css`
          background: #9b268c !important;
          color: white;
        `
      : css``}
`

interface ItemProps extends ButtonNavigationProps {
  highlight?: boolean
}

const Item = ({ className, children, ...props }: ItemProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  )
}

export default Item
