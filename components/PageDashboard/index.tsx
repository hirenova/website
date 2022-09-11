import Page, { PageProps } from "components/Page"
import useAuth from "hooks/useAuth"
import styled from "styled-components"

import Dashboard from "./Dashboard"
import ProfileType from "./ProfileType"

const Wrapper = styled(Page)`
  margin-top: 80px;
  background: #f5f7fc;
  min-height: calc(100vh - 80px);
`

interface PageDashboardProps
  extends Omit<PageProps, "displayConditionAuthId"> {}

const PageDashboard = ({ children, ...props }: PageDashboardProps) => {
  const { profile } = useAuth()

  if (!profile) return null

  return (
    <Wrapper
      title="Dashboard"
      displayConditionAuthId="logged_in"
      showFooter={false}
      {...props}
    >
      {profile.hasCandidateProfile || profile.hasEmployerProfile ? (
        <Dashboard>{children}</Dashboard>
      ) : (
        <ProfileType />
      )}
    </Wrapper>
  )
}

export default PageDashboard
