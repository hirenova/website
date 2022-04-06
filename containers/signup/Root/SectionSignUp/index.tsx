import BoxAuth from "components/BoxAuth";
import Section from "components/Section";
import styled from "styled-components";

const Wrapper = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 80px;
`;

interface SectionSignUpProps {}

const SectionSignUp = ({}: SectionSignUpProps) => {
  return (
    <Wrapper label="Sign up">
      <BoxAuth authMethodId="sign_up" />
    </Wrapper>
  );
};

export default SectionSignUp;
