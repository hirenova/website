import Page from "components/Page";
import SectionSearch from "components/SectionSearch";
import styled from "styled-components";

const Wrapper = styled(Page)``;

const Home = () => {
  return (
    <Wrapper title="Home">
      <SectionSearch />
    </Wrapper>
  );
};

export default Home;
