import styled from "styled-components";

import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Wrapper = styled.div`
  margin-top: 100px;
`;

export interface PageProps {
  children: React.ReactNode;
  className?: string;
}

const Page = ({ children, className }: PageProps) => {
  return (
    <Wrapper>
      <Header />
      <Content className={className}>{children}</Content>
      <Footer />
    </Wrapper>
  );
};

export default Page;
