import { MouseEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  background: transparent;
  border: none;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
`;

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | undefined;
}

const Button = ({ className, ...props }: ButtonProps) => {
  return <Wrapper className={className} {...props} />;
};

export default Button;
