import Button, { ButtonProps } from "components/Button";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled(Button)``;

interface SignUpProps {
  className?: string;
}

const SignUp = ({ className }: SignUpProps) => {
  const router = useRouter();

  const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    router.push({ pathname: "/signup", query: { path: router.pathname } });
  };

  return (
    <Wrapper className={className} onClick={onClick}>
      Sign up
    </Wrapper>
  );
};

export default SignUp;
