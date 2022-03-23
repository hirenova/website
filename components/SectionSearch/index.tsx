import Section from "components/Section";
import styled from "styled-components";

interface SectionSearchProps {
  className?: string;
}

const Wrapper = styled(Section)`
  background: linear-gradient(330deg, #f3d1e4 0%, #ffffff 100%);
`;

const SectionSearch = ({ className }: SectionSearchProps) => {
  return (
    <Wrapper className={className} label="Search">
      Search
    </Wrapper>
  );
};

export default SectionSearch;
