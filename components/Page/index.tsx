import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import Content from "./Content";
import Header from "./Header";

// import Footer from "./Footer";


const Wrapper = styled.div`
  margin-top: 100px;
`;

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
    <>
      <Head>
        <title>HireNova - {title}</title>
      </Head>
      <Wrapper>
        <Header />
        <Content className={className}>{children}</Content>
        {/* <Footer /> */}
      </Wrapper>
    </>
  );
};

export default Page;
