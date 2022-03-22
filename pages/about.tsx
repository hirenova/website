import Page from "components/Page";
import Section from "components/Section";
import styled from "styled-components";

const Wrapper = styled(Page)``;

const About = () => {
  return (
    <Wrapper title="About">
      <Section label="Search">Search</Section>
      <Section label="Jobs">Jobs</Section>
    </Wrapper>
  );
};

export default About;
