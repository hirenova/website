import Box, { BoxProps } from "components/Box";
import { BoxNavigationProps } from "components/BoxNavigation";
import useApp from "hooks/useApp";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import { acceptLogin, acceptProfileType } from "utils";

import Content from "./Content";
import Footer from "./Footer";
import Header, { HeaderProps } from "./Header";
import Loading from "./Loading";
import Sidebar from "./Sidebar";

const Wrapper = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export interface PageProps
  extends BoxProps,
    Partial<HeaderProps>,
    Pick<
      BoxNavigationProps["navigation"][number],
      "displayConditionAuthId" | "displayConditionProfileTypeId"
    > {
  showFooter?: boolean;
}

export const navigation: BoxNavigationProps["navigation"] = [
  {
    children: "Home",
    redirect: { pathname: "/" },
    displayConditionAuthId: "always",
    displayConditionProfileTypeId: "always",
  },
  {
    children: "Dashboard",
    redirect: { pathname: "/dashboard" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "always",
  },
  {
    children: "Candidates",
    redirect: { pathname: "/candidates" },
    displayConditionAuthId: "always",
    displayConditionProfileTypeId: "always",
  },
  {
    children: "Jobs",
    redirect: { pathname: "/jobs" },
    displayConditionAuthId: "always",
    displayConditionProfileTypeId: "always",
  },
  {
    children: "Contact",
    redirect: { pathname: "/contact" },
    displayConditionAuthId: "always",
    displayConditionProfileTypeId: "always",
  },
  {
    children: "About",
    redirect: { pathname: "/about" },
    displayConditionAuthId: "always",
    displayConditionProfileTypeId: "always",
  },
  {
    children: "Profile",
    redirect: { pathname: "/dashboard/profile" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "always",
  },
  {
    children: "Resume",
    redirect: { pathname: "/dashboard/resume" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "candidate",
  },
  {
    children: "Applications",
    redirect: { pathname: "/dashboard/applications" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "candidate",
  },
  {
    children: "Jobs posted",
    redirect: { pathname: "/dashboard/jobs-posted" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "employer",
  },
  {
    children: "Notifications",
    redirect: { pathname: "/dashboard/notifications" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "always",
  },
  {
    children: "TEST candidate",
    redirect: { pathname: "/dashboard/candidate" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "candidate",
  },
  {
    children: "TEST employer",
    redirect: { pathname: "/dashboard/employer" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "employer",
  },
  {
    children: "TEST either",
    redirect: { pathname: "/dashboard/either" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "either",
  },
  {
    children: "TEST neither",
    redirect: { pathname: "/dashboard/neither" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "neither",
  },
  {
    children: "TEST always",
    redirect: { pathname: "/dashboard/always" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "always",
  },
];

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
  const router = useRouter();

  const { user, userLoading, profileTypeIdSelected } = useApp();

  const { sidebarOpen, setSidebarOpen, userDocument } = useApp();

  useEffect(() => {
    setSidebarOpen(false);
  }, [setSidebarOpen]);

  useEffect(() => {
    if (userLoading) return;

    const accept = acceptLogin(displayConditionAuthId, user);

    if (!accept) {
      console.log("login not accepted");
      // router.push({ pathname: "/login", query: { path: router.pathname } });
    }
  }, [userLoading, displayConditionAuthId, user, router]);

  useEffect(() => {
    if (!userDocument) return;

    const accept = acceptProfileType(
      displayConditionProfileTypeId,
      profileTypeIdSelected
    );

    if (!accept) {
      console.log("profileType not accepted");
      // router.push({ pathname: "/" });
    }
  }, [
    userDocument,
    displayConditionProfileTypeId,
    profileTypeIdSelected,
    router,
  ]);

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
      {userLoading ? (
        <Loading />
      ) : (
        <Content className={className}>{children}</Content>
      )}
      {showFooter ? <Footer /> : null}
    </Wrapper>
  );
};

export default Page;
