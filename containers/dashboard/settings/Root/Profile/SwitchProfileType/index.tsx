import Button, { ButtonProps } from "components/Button"
import write from "database/write"
import useAuth from "hooks/useAuth"
import Profile from "models/profile"
import { MouseEventHandler } from "react"
import styled from "styled-components"

const Wrapper = styled(Button)``

interface SwitchProfileTypeProps extends Partial<ButtonProps> {}

const SwitchProfileType = ({ ...props }: SwitchProfileTypeProps) => {
  const { profile, refreshProfile } = useAuth()

  if (!profile) return null

  const newProfileTypes: {
    [key in Profile["activeProfileType"]]: {
      id: Profile["activeProfileType"]
      title: string
    }
  } = {
    CANDIDATE: { id: "EMPLOYER", title: "employer" },
    EMPLOYER: { id: "CANDIDATE", title: "candidate" },
  }

  const newProfileType = newProfileTypes[profile.activeProfileType]

  const onClick: MouseEventHandler<HTMLButtonElement> = async () => {
    if (profile) {
      await write.activateProfileType(profile?.id, newProfileType.id)
      await refreshProfile()
    }
  }

  return (
    <Wrapper onClick={onClick} {...props}>
      Switch to {newProfileType.title} profile
    </Wrapper>
  )
}

export default SwitchProfileType
