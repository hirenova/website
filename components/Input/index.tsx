import { ChangeEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Content = styled.div``;

const Input_ = styled.input`
  font-size: 14px;
  border: none;
  font-family: inherit;
  :focus {
    outline: none;
  }
`;

const Icon = styled.img`
  height: 20px;
`;

interface InputProps {
  children?: React.ReactNode;
  className?: string;
  placeholder?: string;
  src?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ className, src, children, ...props }: InputProps) => {
  return (
    <Wrapper className={className}>
      <Content>
        {src ? <Icon src={src} /> : null}
        {children}
      </Content>
      <Input_ {...props} />
    </Wrapper>
  );
};

export default Input;
