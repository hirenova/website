import Page from "components/Page";
import Section from "components/Section";
import styled from "styled-components";

const Wrapper = styled(Page)``;

const Candidates = () => {
  return (
    <Wrapper title="Candidates">
      <Section label="Candidates">Candidates</Section>
    </Wrapper>
  );
};

export default Candidates;
