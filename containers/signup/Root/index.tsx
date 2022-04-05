import Page from "components/Page";
import styled from "styled-components";

import SectionSignUp from "./SectionSignUp";

const Wrapper = styled(Page)``;

const SignUp = () => {
  return (
    <Wrapper title="Sign Up">
      <SectionSignUp />
    </Wrapper>
  );
};

export default SignUp;
