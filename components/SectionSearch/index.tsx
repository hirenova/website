import Section from "components/Section";
import SectionContent from "components/SectionContent";
import styled from "styled-components";

import Hint from "./Hint";
import Insights from "./Insights";
import Postings from "./Postings";
import SearchForm from "./SearchForm";

const Wrapper = styled(Section)`
  /* background: linear-gradient(320deg, #d1244c 0%, #487bb4 100%); */
  background: url("background.png");
  min-height: calc(100vh - 74px);
  display: flex;
  align-items: center;
  color: white;
  @media (min-width: 1000px) {
    padding: 100px 10%;
  }
`;

const Content = styled(SectionContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: 100%;
  padding: 100px 10%;
  overflow: hidden;
  @media (min-width: 1000px) {
    border-radius: 100px;
  }
`;

interface SectionSearchProps {
  className?: string;
}

const SectionSearch = ({ className }: SectionSearchProps) => {
  return (
    <Wrapper className={className} label="Search">
      <Content>
        <Postings />
        <Hint />
        <SearchForm />
        <Insights />
      </Content>
    </Wrapper>
  );
};

export default SectionSearch;
