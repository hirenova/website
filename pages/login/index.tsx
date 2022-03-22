import Page from "components/Page";
import Section from "components/Section";
import styled from "styled-components";

const Wrapper = styled(Page)``;

const LogIn = () => {
  return (
    <Wrapper title="Log In">
      <Section label="Log In">Log In</Section>
    </Wrapper>
  );
};

export default LogIn;
