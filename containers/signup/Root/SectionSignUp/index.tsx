import BoxSignUp from "components/BoxSignUp"
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

const SectionSignUp = () => {
  return (
    <Wrapper label="Sign up">
      <BoxSignUp />
    </Wrapper>
  )
}

export default SectionSignUp
