import ButtonAuthProviderGoogle from "components/ButtonAuthProviderGoogle";
import Section from "components/Section";
import useApp from "hooks/useApp";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled(Section)`
  border: 1px solid;
  padding-top: 80px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

interface LoginProps {
  className?: string;
}

const Welcome = styled.div``;

const Login = ({ className }: LoginProps) => {
  const { auth } = useApp();

  const router = useRouter();

  useEffect(() => {
    if (router && auth)
      router.push({
        pathname: router.query?.path ? String(router.query.path) : "/dashboard",
      });
  }, [router, auth]);

  return (
    <Wrapper className={className} label="Log in">
      <Welcome>Welcome back</Welcome>
      <ButtonAuthProviderGoogle method="login" />
    </Wrapper>
  );
};

export default Login;
