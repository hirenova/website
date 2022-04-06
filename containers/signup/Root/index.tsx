import Page from "components/Page";
import styled from "styled-components";

import SectionSignUp from "./SectionSignUp";

const Wrapper = styled(Page)``;

const SignUp = () => {
  return (
    <Wrapper title="Sign Up" showSignUp={false}>
      <SectionSignUp />
    </Wrapper>
  );
};

export default SignUp;
