import Section from "components/Section";
import SectionContent from "components/SectionContent";
import styled from "styled-components";

import Form from "./Form";
import Hint from "./Hint";
import Insights from "./Insights";
import Postings from "./Postings";

const Wrapper = styled(Section)`
  /* background: linear-gradient(320deg, #d1244c 0%, #487bb4 100%); */
  background: url("background.png");
  background-size: cover;
  transition: 0.2s;
  color: white;
  padding-top: 80px;
  @media (min-width: 1000px) {
    background: transparent;
    padding: 5%;
    padding-top: calc(80px + 5%);
  }
`;

const Content = styled(SectionContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.2s;
  gap: 40px;
  height: 100%;
  padding: 100px 10%;
  overflow: hidden;
  @media (min-width: 1000px) {
    background: url("background.png");
    background-size: cover;
    border-radius: 100px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
        <Form />
        <Insights />
      </Content>
    </Wrapper>
  );
};

export default SectionSearch;
