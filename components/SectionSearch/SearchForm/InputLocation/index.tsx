import Input from "components/Input";
import { ChangeEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled(Input)``;

interface InputLocationProps {
  className?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputLocation = ({ className, ...props }: InputLocationProps) => {
  return (
    <Wrapper
      className={className}
      placeholder="Country, city..."
      src="location.webp"
      {...props}
    />
  );
};

export default InputLocation;
