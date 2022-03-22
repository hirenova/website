import Page from "components/Page";
import Section from "components/Section";
import styled from "styled-components";

const Wrapper = styled(Page)``;

const SignUp = () => {
  return (
    <Wrapper title="Sign Up">
      <Section label="Sign Up">Sign Up</Section>
    </Wrapper>
  );
};

export default SignUp;
