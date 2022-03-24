import Input from "components/Input";
import { ChangeEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled(Input)`
  @media (min-width: 1000px) {
    padding: 20px;
  }
  @media (max-width: 1000px) {
    padding: 10px;
  }
`;

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
