import PageDashboard from "components/PageDashboard";
import styled from "styled-components";

import PostJob from "./PostJob";

const Wrapper = styled(PageDashboard)`
  margin-top: 80px;
`;

const Root = () => {
  return (
    <Wrapper
      title="Post a job"
      displayConditionProfileTypeId="employer"
      showFooter={false}
    >
      <PostJob />
    </Wrapper>
  );
};

export default Root;
