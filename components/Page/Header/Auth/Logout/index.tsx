import Button, { ButtonProps } from "components/Button";
import useApp from "hooks/useApp";
import useAuth from "hooks/useAuth";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled(Button)``;

interface LogoutProps {
  className?: string;
}

const Logout = ({ className }: LogoutProps) => {
  const router = useRouter();

  const { logout } = useAuth();

  const onClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
    await logout();
    router.push({ pathname: "/" });
  };

  return (
    <Wrapper className={className} onClick={onClick}>
      Log out
    </Wrapper>
  );
};

export default Logout;
