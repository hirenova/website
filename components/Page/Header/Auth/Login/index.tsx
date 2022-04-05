import Button, { ButtonProps } from "components/Button";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled(Button)``;

interface LoginProps {
  className?: string;
}

const Login = ({ className }: LoginProps) => {
  const router = useRouter();

  const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    router.push({ pathname: "/login", query: { path: router.pathname } });
  };

  return (
    <Wrapper className={className} onClick={onClick}>
      Log in
    </Wrapper>
  );
};

export default Login;
