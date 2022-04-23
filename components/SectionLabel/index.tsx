import Heading, { HeadingProps } from "components/Heading";
import styled from "styled-components";

const Wrapper = styled(Heading)`
  padding-bottom: 20px;
`;

interface SectionLabelProps extends HeadingProps {
  children: HeadingProps["children"];
}

const SectionLabel = ({ className, children, ...props }: SectionLabelProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default SectionLabel;
