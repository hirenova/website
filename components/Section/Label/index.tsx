import styled from "styled-components";

interface LabelProps {
  children: React.ReactNode;
}

const Wrapper = styled.div<LabelProps>``;

const Label = ({ children }: LabelProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Label;
