import useApp from "hooks/useApp";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import PageProvider from "providers/PageProvider";
import { useEffect } from "react";
import styled from "styled-components";

import Content from "./Content";
import Header from "./Header";
import SideBar from "./SideBar";

// import Footer from "./Footer";

const Wrapper = styled(PageProvider)``;

export interface PageProps {
  children: React.ReactNode;
  className?: string;
  title: string;
  display?: "logged_in";
}

const navigation: Array<{
  label: string;
  href: string;
  display: "logged_in" | "not_logged_in" | "always";
}> = [
  { label: "Home", href: "/", display: "always" },
  { label: "Dashboard", href: "/dashboard", display: "logged_in" },
  { label: "Candidates", href: "/candidates", display: "always" },
  { label: "Jobs", href: "/jobs", display: "always" },
  { label: "Contact", href: "/contact", display: "always" },
  { label: "About", href: "/about", display: "always" },
];

const Page: NextPage<PageProps> = ({
  children,
  className,
  title,
  display,
}: PageProps) => {
  const router = useRouter();
  const { user } = useApp();

  const navigationDisplayed = navigation.filter(
    (item) =>
      item.display == "always" ||
      (user && item.display == "logged_in") ||
      (!user && item.display == "not_logged_in")
  );

  useEffect(() => {
    if (router && display == "logged_in" && !user)
      router.push({ pathname: "/login", query: { path: router.pathname } });
  }, [router, user, display]);

  return (
    <Wrapper>
      <Head>
        <title>HireNova - {title}</title>
      </Head>
      <Header navigation={navigationDisplayed} />
      <SideBar navigation={navigationDisplayed} />
      <Content className={className}>{children}</Content>
      {/* <Footer /> */}
    </Wrapper>
  );
};

export default Page;
