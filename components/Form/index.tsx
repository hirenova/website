import { FormEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export interface FormProps {
  className?: string;
  children: React.ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

const Form = ({ className, onSubmit, ...props }: FormProps) => {
  const onSubmitIntercept: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (onSubmit) onSubmit(event);
  };

  return (
    <Wrapper className={className} onSubmit={onSubmitIntercept} {...props} />
  );
};

export default Form;
