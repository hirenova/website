import Page, { PageProps } from "components/Page";
import useApp from "hooks/useApp";
import styled from "styled-components";

import Dashboard from "./Dashboard";
import ProfileType from "./ProfileType";

const Wrapper = styled(Page)`
  margin-top: 80px;
  background: #f5f7fc;
  min-height: calc(100vh - 80px);
`;

interface PageDashboardProps
  extends Omit<PageProps, "displayConditionAuthId"> {}

const PageDashboard = ({ children, ...props }: PageDashboardProps) => {
  const { userDocumentData } = useApp();

  return (
    <Wrapper
      title="Dashboard"
      displayConditionAuthId="logged_in"
      showFooter={false}
      {...props}
    >
      {userDocumentData?.candidate || userDocumentData?.employer ? (
        <Dashboard>{children}</Dashboard>
      ) : (
        <ProfileType />
      )}
    </Wrapper>
  );
};

export default PageDashboard;
