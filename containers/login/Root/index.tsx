import Page from "components/Page";
import styled from "styled-components";

import Login from "./Login";

const Wrapper = styled(Page)``;

const Root = () => {
  return (
    <Wrapper title="Log in">
      <Login />
    </Wrapper>
  );
};

export default Root;
