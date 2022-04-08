import Page from "components/Page";
import styled from "styled-components";

import SectionSearch from "./SectionSearch";

const Wrapper = styled(Page)``;

const Root = () => {
  return (
    <Wrapper title="Home" displayConditionId="always">
      <SectionSearch />
    </Wrapper>
  );
};

export default Root;
