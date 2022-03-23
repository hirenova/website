import styled from "styled-components";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  label: string;
}

const Wrapper = styled.div`
  height: 100vh;
  padding: 10%;
`;

const Section = ({ className, children }: SectionProps) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Section;
