import Button from "components/Button";
import { MouseEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled(Button)`
  background: #608cc0;
  font-size: 18px;
  padding: 10px;
  border-radius: 6px;
  border: 2px solid #608cc0;
  color: white;
  transition: 0.2s;
  font-weight: 500;
  letter-spacing: 0.02em;
  :hover {
    background: white;
    color: #608cc0;
  }
`;

interface SubmitButtonProps {
  className?: string;
}

const SubmitButton = ({ className, ...props }: SubmitButtonProps) => {
  return (
    <Wrapper className={className} type="submit" {...props}>
      Search
    </Wrapper>
  );
};

export default SubmitButton;
