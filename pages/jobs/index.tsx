import Page from "components/Page";
import Section from "components/Section";
import SectionJobs from "components/SectionJobs";
import styled from "styled-components";

const Wrapper = styled(Page)``;

const Jobs = () => {
  return (
    <Wrapper title="Jobs">
      <SectionJobs />
    </Wrapper>
  );
};

export default Jobs;
