import { BoxNavigationProps } from "components/BoxNavigation";
import { auth } from "config/firebase";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import PageProvider from "providers/PageProvider";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";

import Content from "./Content";
import Footer from "./Footer";
import Header, { HeaderProps } from "./Header";
import Sidebar from "./Sidebar";

const Wrapper = styled(PageProvider)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export interface PageProps
  extends Partial<HeaderProps>,
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
    displayConditionId: "always",
  },
  {
    children: "Notifications",
    redirect: { pathname: "/dashboard/notifications" },
    displayConditionId: "always",
  },
  {
    children: "Applications",
    redirect: { pathname: "/dashboard/applications" },
    displayConditionId: "always",
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

  useEffect(() => {
    if (displayConditionId == "logged_in" && !user)
      router.push({ pathname: "/login", query: { path: router.pathname } });
  }, [router, user, displayConditionId]);

  return (
    <Wrapper className={className}>
      <Head>
        <title>HireNova - {title}</title>
      </Head>
      <Header
        navigation={navigation}
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
      <Footer />
    </Wrapper>
  );
};

export default Page;
