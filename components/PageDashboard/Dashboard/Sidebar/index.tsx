import Card, { CardProps } from "components/Card"
import useAuth from "hooks/useAuth"
import navigation from "navigation"
import styled from "styled-components"
import { acceptProfileType } from "utils"

import Menu from "./Menu"
import Profile from "./Profile"

const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  @media (max-width: 700px) {
    display: none;
  }
`

interface SidebarProps extends CardProps {}

const Sidebar = ({ className, ...props }: SidebarProps) => {
  const { profile } = useAuth()

  return (
    <Wrapper className={className} {...props}>
      <Profile />
      <Menu
        navigation={navigation.filter(
          (item) =>
            item.redirect?.pathname?.startsWith("/dashboard/") &&
            profile &&
            acceptProfileType(
              item.displayConditionProfileTypeId,
              profile.activeProfileType
            )
        )}
      />
      {profile?.activeProfileType}
    </Wrapper>
  )
}

export default Sidebar
