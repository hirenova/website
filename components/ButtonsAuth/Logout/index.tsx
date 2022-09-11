import Button, { ButtonProps } from "components/Button"
import useAuth from "hooks/useAuth"
import { MouseEventHandler } from "react"
import styled from "styled-components"

const Wrapper = styled(Button)``

interface LogoutProps extends Partial<ButtonProps> {}

const Logout = ({ className, ...props }: LogoutProps) => {
  const { logout } = useAuth()

  const onClick: MouseEventHandler<HTMLButtonElement> = async () => {
    await logout()
  }

  return (
    <Wrapper className={className} onClick={onClick} {...props}>
      Log out
    </Wrapper>
  )
}

export default Logout
