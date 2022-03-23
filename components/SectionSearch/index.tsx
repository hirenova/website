import Section from "components/Section";
import styled from "styled-components";

import Hint from "./Hint";
import Insights from "./Insights";
import Postings from "./Postings";
import SearchForm from "./SearchForm";

const Wrapper = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  background: linear-gradient(330deg, #f3d1e4 0%, #ffffff 100%);
`;

interface SectionSearchProps {
  className?: string;
}

const SectionSearch = ({ className }: SectionSearchProps) => {
  return (
    <Wrapper className={className} label="Search">
      <Postings />
      <Hint />
      <SearchForm />
      <Insights />
    </Wrapper>
  );
};

export default SectionSearch;
