import { NextPage } from "next";
import Head from "next/head";
import PageProvider from "providers/PageProvider";
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
}

const Page: NextPage<PageProps> = ({
  children,
  className,
  title,
}: PageProps) => {
  return (
    <Wrapper>
      <Head>
        <title>HireNova - {title}</title>
      </Head>
      <Header />
      <SideBar />
      <Content className={className}>{children}</Content>
      {/* <Footer /> */}
    </Wrapper>
  );
};

export default Page;
