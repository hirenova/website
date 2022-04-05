import ButtonAuthProvider from "components/ButtonAuthProvider";
import { AuthParams } from "hooks/useAuth";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export interface ProvidersProps extends AuthParams {
  className?: string;
}

const Providers = ({ className, ...props }: ProvidersProps) => {
  return (
    <Wrapper className={className}>
      <ButtonAuthProvider authProviderId="google" {...props} />
      <ButtonAuthProvider authProviderId="microsoft" {...props} />
      <ButtonAuthProvider authProviderId="facebook" {...props} />
      <ButtonAuthProvider authProviderId="github" {...props} />
    </Wrapper>
  );
};

export default Providers;
