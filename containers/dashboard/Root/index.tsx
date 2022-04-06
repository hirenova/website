import Page from "components/Page";
import styled from "styled-components";

import Dashboard from "./Dashboard";

const Wrapper = styled(Page)``;

const Root = () => {
  return (
    <Wrapper title="Dashboard" display="logged_in">
      <Dashboard />
    </Wrapper>
  );
};

export default Root;
