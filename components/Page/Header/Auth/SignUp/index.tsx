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

interface SignUpProps {
  className?: string;
}

const SignUp = ({ className }: SignUpProps) => {
  const router = useRouter();

  const { auth } = useApp();

  const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    router.push({ pathname: "/signup", query: { path: router.pathname } });
  };

  return (
    <Wrapper className={className} onClick={onClick} $auth={auth}>
      Sign up
    </Wrapper>
  );
};

export default SignUp;
