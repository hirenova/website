import Page from "components/Page";
import styled from "styled-components";

import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

const Wrapper = styled(Page)`
  display: flex;
  margin-top: 80px;
  padding: 40px;
  gap: 40px;
  background: #f5f7fc;
  height: calc(100vh - 80px);
`;

const Root = () => {
  return (
    <Wrapper
      title="Dashboard"
      displayConditionId="logged_in"
      showFooter={false}
    >
      <Sidebar />
      <Dashboard />
    </Wrapper>
  );
};

export default Root;
