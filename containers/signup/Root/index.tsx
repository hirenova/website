import Page from "components/Page";
import Section from "components/Section";
import SectionSignUp from "components/SectionSignUp";
import styled from "styled-components";

const Wrapper = styled(Page)``;

const SignUp = () => {
  return (
    <Wrapper title="Sign Up">
      <SectionSignUp />
    </Wrapper>
  );
};

export default SignUp;
