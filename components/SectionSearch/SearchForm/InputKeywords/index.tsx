import Input from "components/Input";
import { ChangeEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled(Input)`
  padding: 20px;
`;

interface InputKeywordsProps {
  className?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputKeywords = ({ className, ...props }: InputKeywordsProps) => {
  return (
    <Wrapper
      className={className}
      placeholder="Job title, keywords..."
      src="search.webp"
      {...props}
    ></Wrapper>
  );
};

export default InputKeywords;
