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
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: white;
  /* @media (min-width: 1000px) {
    padding: 100px 10%;
  } */
  border: 1px solid black;
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

interface SearchProps {
  className?: string;
}

const Search = ({ className }: SearchProps) => {
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

export default Search;
