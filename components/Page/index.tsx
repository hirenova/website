import Box, { BoxProps } from "components/Box";
import { BoxNavigationProps } from "components/BoxNavigation";
import { auth } from "config/firebase";
import useApp from "hooks/useApp";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";

import Content from "./Content";
import Footer from "./Footer";
import Header, { HeaderProps } from "./Header";
import Sidebar from "./Sidebar";

const Wrapper = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export interface PageProps
  extends BoxProps,
    Partial<HeaderProps>,
    Pick<BoxNavigationProps["navigation"][number], "displayConditionId"> {}

const navigation: BoxNavigationProps["navigation"] = [
  {
    children: "Home",
    redirect: { pathname: "/" },
    displayConditionId: "always",
  },
  {
    children: "Dashboard",
    redirect: { pathname: "/dashboard" },
    displayConditionId: "logged_in",
  },
  {
    children: "Candidates",
    redirect: { pathname: "/candidates" },
    displayConditionId: "always",
  },
  {
    children: "Jobs",
    redirect: { pathname: "/jobs" },
    displayConditionId: "always",
  },
  {
    children: "Contact",
    redirect: { pathname: "/contact" },
    displayConditionId: "always",
  },
  {
    children: "About",
    redirect: { pathname: "/about" },
    displayConditionId: "always",
  },
  {
    children: "Profile",
    redirect: { pathname: "/dashboard/profile" },
    displayConditionId: "logged_in",
  },
  {
    children: "Resume",
    redirect: { pathname: "/dashboard/resume" },
    displayConditionId: "logged_in",
  },
  {
    children: "Notifications",
    redirect: { pathname: "/dashboard/notifications" },
    displayConditionId: "logged_in",
  },
  {
    children: "Applications",
    redirect: { pathname: "/dashboard/applications" },
    displayConditionId: "logged_in",
  },
];

const Page: NextPage<PageProps> = ({
  children,
  className,
  title,
  displayConditionId,
  showLogin = true,
  showLogout = true,
  showSignUp = true,
}: PageProps) => {
  const router = useRouter();

  const [user] = useAuthState(auth);

  const { sidebarOpen, setSidebarOpen } = useApp();

  useEffect(() => {
    setSidebarOpen(false);
  }, [setSidebarOpen]);

  useEffect(() => {
    if (displayConditionId == "logged_in" && !user)
      router.push({ pathname: "/login", query: { path: router.pathname } });
  }, [router, user, displayConditionId]);

  return (
    <Wrapper
      className={className}
      overflow={sidebarOpen ? "hidden" : "unset"}
      height={sidebarOpen ? "100vh" : "unset"}
    >
      <Head>
        <title>HireNova - {title}</title>
      </Head>
      <Header
        navigation={navigation.filter(
          (item) => !item.redirect?.pathname?.startsWith("/dashboard/")
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
      <Content className={className}>{children}</Content>
      {sidebarOpen ? "yes" : "no"}
      <Footer />
    </Wrapper>
  );
};

export default Page;
