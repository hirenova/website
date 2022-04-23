import PageDashboard from "components/PageDashboard";
import styled from "styled-components";

import Profile from "./Profile";

const Wrapper = styled(PageDashboard)`
  margin-top: 80px;
`;

const Root = () => {
  return (
    <Wrapper
      title="Settings"
      displayConditionProfileTypeId="always"
      showFooter={false}
    >
      <Profile />
    </Wrapper>
  );
};

export default Root;
