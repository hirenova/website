import styled from "styled-components";

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = styled.div<ContentProps>`
  margin: max(min(5%, 100px), 20px);
`;

const Content = ({ className, children }: ContentProps) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Content;
