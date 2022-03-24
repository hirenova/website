import styled from "styled-components";

const Wrapper = styled.div``;

interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
}

const SectionContent = ({ className, children }: SectionContentProps) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default SectionContent;
