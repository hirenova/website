import Section from "components/Section";
import styled from "styled-components";

interface SectionSearchProps {
  className?: string;
}

const Wrapper = styled(Section)``;

const SectionSearch = ({ className }: SectionSearchProps) => {
  return (
    <Wrapper className={className} label="Search">
      Search
    </Wrapper>
  );
};

export default SectionSearch;
