import { BoxProps } from "components/Box";
import Heading from "components/Heading";
import Section from "components/Section";
import SectionContent from "components/SectionContent";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";

import Statistics from "./Statistics";

const Wrapper = styled(Section)`
  padding-top: 80px;
`;

const Content = styled(SectionContent)`
  padding: 5%;
`;

interface DashboardProps extends BoxProps {}

const Dashboard = ({ className, ...props }: DashboardProps) => {
  // const [user, userLoading, userError] = useAuthState(auth);
  return (
    <Wrapper className={className} label="Dashboard" {...props}>
      <Content>
        <Heading>Dashboard</Heading>
        <Statistics />
      </Content>
    </Wrapper>
  );
};

export default Dashboard;
