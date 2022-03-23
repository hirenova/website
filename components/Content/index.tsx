import styled from "styled-components";

interface ContentProps {
  className?: string;
}

const Wrapper = styled.div<ContentProps>``;

const Content = ({ className }: ContentProps) => {
  return <Wrapper className={className}>Content</Wrapper>;
};

export default Content;
