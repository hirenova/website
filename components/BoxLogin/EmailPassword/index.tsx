import Button from "components/Button"
import Form from "components/Form"
import Input from "components/Input"
import useAuth from "hooks/useAuth"
import { ChangeEventHandler, FormEventHandler, useState } from "react"
import styled from "styled-components"

const Wrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: fit-content;
`

interface EmailPasswordProps {
  className?: string
}

const EmailPassword = ({ className }: EmailPasswordProps) => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const { login } = useAuth()

  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value)
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = async () => {
    console.log("logging in")
    await login({ email, password })
  }

  return (
    <Wrapper className={className} onSubmit={onSubmit}>
      <Input
        type="email"
        isRequired
        autoComplete="email"
        placeholder="Email"
        onChange={onChangeEmail}
        value={email}
      />
      <Input
        type="password"
        isRequired
        autoComplete={"current-password"}
        placeholder="Password"
        onChange={onChangePassword}
        value={password}
      />
      <Button type="submit">Log in</Button>
    </Wrapper>
  )
}

export default EmailPassword
