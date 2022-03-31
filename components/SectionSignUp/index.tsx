import ButtonAuthProviderGoogle from "components/ButtonAuthProviderGoogle";
import Section from "components/Section";
import styled from "styled-components";

const Wrapper = styled(Section)`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
`;

const Welcome = styled.span``;

interface SectionSignUpProps {
  className?: string;
}

const SectionSignUp = ({ className }: SectionSignUpProps) => {
  return (
    <Wrapper className={className} label="Sign up">
      <Welcome>Welcome to HireNova</Welcome>
      <ButtonAuthProviderGoogle method="sign_up" />
    </Wrapper>
  );
};

export default SectionSignUp;
