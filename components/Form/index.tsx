import { FormEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled.form``;

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
