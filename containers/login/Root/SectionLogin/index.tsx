import BoxLogin from "components/BoxLogin"
import Section from "components/Section"
import styled from "styled-components"

const Wrapper = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 80px;
`

const SectionLogin = () => {
  return (
    <Wrapper label="Log in">
      <BoxLogin />
    </Wrapper>
  )
}

export default SectionLogin
