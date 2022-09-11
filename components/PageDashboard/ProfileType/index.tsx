import Heading from "components/Heading"
import Section from "components/Section"
import styled from "styled-components"

import Options from "./Options"

const Wrapper = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 100px;
  flex: 1;
  align-items: center;
  padding: 20px;
`

interface ProfileTypeProps {
  className?: string
}

const ProfileType = ({ className }: ProfileTypeProps) => {
  return (
    <Wrapper className={className} label="Choose a profile type">
      <Heading textAlign={"center"}>
        Are you a job candidate or an employer?
      </Heading>
      <Options />
    </Wrapper>
  )
}

export default ProfileType
