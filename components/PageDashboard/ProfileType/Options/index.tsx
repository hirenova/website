import Box, { BoxProps } from "components/Box"
import Button from "components/Button"
import write from "database/write"
import useAuth from "hooks/useAuth"
import { MouseEventHandler } from "react"
import styled from "styled-components"

import Item from "./Item"
import List from "./List"
import ListItem from "./ListItem"

const Wrapper = styled(Box)`
  display: flex;
  gap: 40px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

interface OptionsProps extends BoxProps {}

const Options = ({ className, ...props }: OptionsProps) => {
  const { user, profile, refreshProfile } = useAuth()

  if (!user || !profile) {
    return null
  }

  const onCandidate: MouseEventHandler<HTMLButtonElement> = async () => {
    await write.enableCandidateProfile(profile.id)
    await write.activateProfileType(profile.id, "CANDIDATE")
    await refreshProfile()
  }

  const onEmployer: MouseEventHandler<HTMLButtonElement> = async () => {
    await write.enableEmployerProfile(profile.id)
    await write.activateProfileType(profile.id, "EMPLOYER")
    await refreshProfile()
  }

  return (
    <Wrapper className={className} {...props}>
      <Item>
        <Button colorScheme={"blue"} size="lg" onClick={onCandidate}>
          Candidate
        </Button>
        <List>
          <ListItem>Apply for jobs</ListItem>
          <ListItem>Upload a resume</ListItem>
          <ListItem>Receive referrals</ListItem>
        </List>
      </Item>
      <Item>
        <Button colorScheme={"purple"} size="lg" onClick={onEmployer}>
          Employer
        </Button>
        <List>
          <ListItem>Post jobs</ListItem>
          <ListItem>Create a company page</ListItem>
          <ListItem>Assess applications</ListItem>
        </List>
      </Item>
    </Wrapper>
  )
}

export default Options
