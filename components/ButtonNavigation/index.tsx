import Button, { ButtonProps } from "components/Button";
import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled(Button)``;

export type DisplayConditionId = "logged_in" | "not_logged_in" | "always";

export interface ButtonNavigationProps extends ButtonProps {
  displayConditionId: DisplayConditionId;
}

const ButtonNavigation = ({
  className,
  children,
  redirect,
  ...props
}: ButtonNavigationProps) => {
  const router = useRouter();
  return (
    <Wrapper
      className={className}
      redirect={redirect}
      // current={
      //   redirect?.pathname &&
      //   (redirect.pathname === "/"
      //     ? router.pathname === redirect.pathname
      //     : router.pathname.startsWith(redirect.pathname))
      // }
      {...props}
    >
      {children}
    </Wrapper>
  );
};

export default ButtonNavigation;
