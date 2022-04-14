import Box, { BoxProps } from "components/Box";
import styled from "styled-components";

const Wrapper = styled(Box)``;

export interface SectionProps extends BoxProps {
  label: string;
}

const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default Section;
