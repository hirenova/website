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
      ? css``
      : css`
          display: none;
        `}
`;

interface LogoutProps {
  className?: string;
}

const Logout = ({ className }: LogoutProps) => {
  const router = useRouter();

  const { logout } = useAuth();

  const { auth } = useApp();

  const onClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
    await logout();
    router.push({ pathname: "/" });
  };

  return (
    <Wrapper className={className} onClick={onClick} $auth={auth}>
      Log out
    </Wrapper>
  );
};

export default Logout;
