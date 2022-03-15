import styled from "styled-components";

const Wrapper = styled.div``;

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

const Content = ({ className, children }: ContentProps) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Content;
