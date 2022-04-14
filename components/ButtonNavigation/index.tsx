import Button, { ButtonProps } from "components/Button";
import useApp from "hooks/useApp";
import styled, { css } from "styled-components";
import { acceptLogin, acceptProfileType } from "utils";

const Wrapper = styled(Button)`
  background: unset;
  font-family: Montserrat;
  font-weight: 500;
  text-align: unset;
  height: unset;
  :hover {
    background: unset;
  }
  :focus {
    box-shadow: unset;
  }
  /* ${(display) =>
    display
      ? css`
          display: block;
        `
      : css`
          display: none;
        `} */
`;

export type DisplayConditionAuthId = "logged_in" | "not_logged_in" | "always";

export type DisplayConditionProfileTypeId =
  | "candidate"
  | "employer"
  | "always"
  | "either"
  | "neither";

export interface ButtonNavigationProps extends ButtonProps {
  displayConditionAuthId: DisplayConditionAuthId;
  displayConditionProfileTypeId: DisplayConditionProfileTypeId;
}

const ButtonNavigation = ({
  className,
  children,
  redirect,
  displayConditionAuthId,
  displayConditionProfileTypeId,
  ...props
}: ButtonNavigationProps) => {
  const { user, profileTypeIdSelected } = useApp();

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
      display={
        acceptLogin(displayConditionAuthId, user) &&
        acceptProfileType(displayConditionProfileTypeId, profileTypeIdSelected)
          ? "unset"
          : "none"
      }
      {...props}
    >
      {children}
    </Wrapper>
  );
};

export default ButtonNavigation;
