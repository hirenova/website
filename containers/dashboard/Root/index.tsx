import Page from "components/Page";
import useApp from "hooks/useApp";
import styled from "styled-components";

import Dashboard from "./Dashboard";
import ProfileType from "./ProfileType";

const Wrapper = styled(Page)`
  margin-top: 80px;
`;

const Root = () => {
  const { userDocument } = useApp();

  return (
    <Wrapper
      title="Dashboard"
      displayConditionAuthId="logged_in"
      displayConditionProfileTypeId="either"
      showFooter={false}
    >
      <pre>{JSON.stringify(userDocument?.candidate, null, 4)}</pre>
      {userDocument?.candidate || userDocument?.employer ? (
        <Dashboard />
      ) : (
        <ProfileType />
      )}
    </Wrapper>
  );
};

export default Root;
