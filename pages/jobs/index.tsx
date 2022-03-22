import Page from "components/Page";
import Section from "components/Section";
import styled from "styled-components";

const Wrapper = styled(Page)``;

const Jobs = () => {
  return (
    <Wrapper title="Jobs">
      <Section label="Jobs">Jobs</Section>
    </Wrapper>
  );
};

export default Jobs;
