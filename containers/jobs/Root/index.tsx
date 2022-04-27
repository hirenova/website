import Page from "components/Page";
import styled from "styled-components";

import Jobs from "./Jobs";

const Wrapper = styled(Page)`
  margin-top: 80px;
`;

const Root = () => {
  return (
    <Wrapper
      title="Jobs"
      displayConditionAuthId="always"
      displayConditionProfileTypeId="always"
    >
      <Jobs />
    </Wrapper>
  );
};

export default Root;
