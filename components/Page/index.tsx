import useApp from "hooks/useApp";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import PageProvider from "providers/PageProvider";
import { useEffect } from "react";
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

export type DisplayConditionIdType = "logged_in" | "not_logged_in" | "always";

export interface PageProps extends Partial<HeaderProps> {
  displayConditionId?: DisplayConditionIdType;
}

const navigation: Array<{
  label: string;
  href: string;
  displayConditionId: DisplayConditionIdType;
}> = [
  { label: "Home", href: "/", displayConditionId: "always" },
  { label: "Dashboard", href: "/dashboard", displayConditionId: "logged_in" },
  { label: "Candidates", href: "/candidates", displayConditionId: "always" },
  { label: "Jobs", href: "/jobs", displayConditionId: "always" },
  { label: "Contact", href: "/contact", displayConditionId: "always" },
  { label: "About", href: "/about", displayConditionId: "always" },
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
  const { user } = useApp();

  const navigationDisplayed = navigation.filter(
    (item) =>
      item.displayConditionId == "always" ||
      (user && item.displayConditionId == "logged_in") ||
      (!user && item.displayConditionId == "not_logged_in")
  );

  useEffect(() => {
    if (router && displayConditionId == "logged_in" && !user)
      router.push({ pathname: "/login", query: { path: router.pathname } });
  }, [router, user, displayConditionId]);

  return (
    <Wrapper className={className}>
      <Head>
        <title>HireNova - {title}</title>
      </Head>
      <Header
        navigation={navigationDisplayed}
        showLogin={showLogin}
        showSignUp={showSignUp}
        showLogout={showLogout}
      />
      <Sidebar
        navigation={navigationDisplayed}
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
