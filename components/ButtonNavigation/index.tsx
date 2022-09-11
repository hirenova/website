import Button, { ButtonProps } from "components/Button"
import styled from "styled-components"

const Wrapper = styled(Button)`
  font-family: Montserrat;
  text-align: unset;
  height: unset;
`

export interface ButtonNavigationProps extends ButtonProps {}

const ButtonNavigation = ({
  className,
  children,
  redirect,
  background = "none",
  justifyContent = "flex-start",
  fontWeight = "medium",
  ...props
}: ButtonNavigationProps) => {
  return (
    <Wrapper
      className={className}
      background={background}
      redirect={redirect}
      justifyContent={justifyContent}
      fontWeight={fontWeight}
      {...props}
    >
      {children}
    </Wrapper>
  )
}

export default ButtonNavigation
