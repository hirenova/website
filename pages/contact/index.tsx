import Page from "components/Page";
import Section from "components/Section";
import styled from "styled-components";

const Wrapper = styled(Page)``;

const Contact = () => {
  return (
    <Wrapper title="Contact">
      <Section label="Contact">Contact</Section>
    </Wrapper>
  );
};

export default Contact;
