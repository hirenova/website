import { UrlObject } from "url";

import {
  Button as ButtonChakra,
  ButtonProps as ButtonChakraProps,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled(ButtonChakra)``;

export interface ButtonProps
  extends Pick<
    ButtonChakraProps,
    "className" | "onClick" | "leftIcon" | "type"
  > {
  redirect?: UrlObject;
  children: React.ReactNode;
}

const Button = ({ className, redirect, onClick, ...props }: ButtonProps) => {
  const router = useRouter();
  const onClickIntercept: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (redirect) router.push(redirect);
    if (onClick) onClick(event);
  };
  return (
    <ButtonChakra className={className} onClick={onClickIntercept} {...props} />
  );
};

export default Button;
