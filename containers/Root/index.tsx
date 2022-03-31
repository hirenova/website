import Page from "components/Page";
import styled from "styled-components";

import Search from "./Search";

const Wrapper = styled(Page)``;

const Root = () => {
  return (
    <Wrapper title="Home">
      <Search />
    </Wrapper>
  );
};

export default Root;
