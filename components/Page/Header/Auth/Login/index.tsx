import Button, { ButtonProps } from "components/Button";
import useApp from "hooks/useApp";
import useAuth from "hooks/useAuth";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";
import styled, { css } from "styled-components";

interface StyledButtonProps extends ButtonProps {
  $auth: boolean;
}

const Wrapper = styled(Button)<StyledButtonProps>`
  ${({ $auth }) =>
    $auth
      ? css`
          display: none;
        `
      : css`
          /* @media (max-width: 1300px) {
            display: none;
          } */
        `}
`;

interface LoginProps {
  className?: string;
}

const Login = ({ className }: LoginProps) => {
  const router = useRouter();

  const { auth } = useApp();

  const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    router.push({ pathname: "/login", query: { path: router.pathname } });
  };

  return (
    <Wrapper className={className} onClick={onClick} $auth={auth}>
      Log in
    </Wrapper>
  );
};

export default Login;
