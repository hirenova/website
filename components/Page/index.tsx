import Box, { BoxProps } from "components/Box"
import useApp from "hooks/useApp"
import useAuth from "hooks/useAuth"
import navigation, {
  DisplayConditionAuthId,
  DisplayConditionProfileTypeId,
} from "navigation"
import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { acceptLogin, acceptProfileType } from "utils"

import Content from "./Content"
import Footer from "./Footer"
import Header, { HeaderProps } from "./Header"
import Loading from "./Loading"
import Sidebar from "./Sidebar"

const Wrapper = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export interface PageProps extends BoxProps, Partial<HeaderProps> {
  displayConditionAuthId: DisplayConditionAuthId
  displayConditionProfileTypeId: DisplayConditionProfileTypeId
  showFooter?: boolean
}

const Page: NextPage<PageProps> = ({
  children,
  className,
  title,
  displayConditionAuthId,
  displayConditionProfileTypeId,
  showLogin = true,
  showLogout = true,
  showSignUp = true,
  showFooter = true,
}: PageProps) => {
  const router = useRouter()

  const { sidebarOpen, setSidebarOpen } = useApp()

  const { user, loading: authLoading, profile } = useAuth()

  const [isRedirectionLoading, setIsRedirectionLoading] = useState(true)

  const checkRedirect = () => {
    const isLoginAccepted = acceptLogin(displayConditionAuthId, user)
    const isProfileTypeAccepted = acceptProfileType(
      displayConditionProfileTypeId,
      profile?.activeProfileType
    )
    if (!isLoginAccepted) {
      if (user) return "/"
      return `/login?path=${router.pathname}`
    }
    if (!isProfileTypeAccepted) {
      if (user) return "/dashboard"
      return `/login?path=${router.pathname}`
    }
  }

  useEffect(() => {
    const redirectUrl = checkRedirect()
    if (redirectUrl) router.push(redirectUrl)
    else setIsRedirectionLoading(false)
  }, [
    displayConditionAuthId,
    displayConditionProfileTypeId,
    profile?.activeProfileType,
    user,
  ])

  useEffect(() => {
    setSidebarOpen(false)
  }, [])

  return (
    <Wrapper
      overflow={sidebarOpen ? "hidden" : "unset"}
      height={sidebarOpen ? "100vh" : "unset"}
    >
      <Head>
        <title>HireNova - {title}</title>
      </Head>
      <Header
        navigation={navigation.filter(
          (item) =>
            !item.redirect?.pathname?.startsWith("/dashboard/") ||
            (item.redirect?.pathname === "/dashboard/profile" && user)
        )}
        showLogin={showLogin}
        showSignUp={showSignUp}
        showLogout={showLogout}
      />
      <Sidebar
        navigation={navigation}
        showLogin={showLogin}
        showSignUp={showSignUp}
        showLogout={showLogout}
      />
      {authLoading || isRedirectionLoading ? (
        <Loading />
      ) : (
        <Content className={className}>{children}</Content>
      )}
      {showFooter ? <Footer /> : null}
    </Wrapper>
  )
}

export default Page
