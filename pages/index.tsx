import Page from "components/Page";
import type { PageProps } from "components/Page";
import Section from "components/Section";
import type { NextPage } from "next";
import styled from "styled-components";

const Wrapper = styled(Page)``;

const Home: NextPage<PageProps> = () => {
  return (
    <Wrapper>
      <Section label="Search">Search</Section>
      <Section label="Jobs">Jobs</Section>
    </Wrapper>
  );
};

export default Home;
