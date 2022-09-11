import Button, { ButtonProps } from "components/Button"
import useAuth from "hooks/useAuth"
import styled from "styled-components"

const Wrapper = styled(Button)``

interface ButtonLogoutProps extends Omit<ButtonProps, "children"> {}

const ButtonLogout = ({ className, ...props }: ButtonLogoutProps) => {
  const { logout } = useAuth()

  const onClick = async () => {
    await logout()
  }

  return (
    <Wrapper className={className} onClick={onClick} {...props}>
      Logout
    </Wrapper>
  )
}

export default ButtonLogout
