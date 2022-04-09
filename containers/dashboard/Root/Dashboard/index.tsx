import { BoxProps } from "components/Box";
import Heading from "components/Heading";
import Section from "components/Section";
import SectionContent from "components/SectionContent";
import styled from "styled-components";

import Statistics from "./Statistics";

const Wrapper = styled(Section)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Content = styled(SectionContent)``;

interface DashboardProps extends BoxProps {}

const Dashboard = ({ className, ...props }: DashboardProps) => {
  return (
    <Wrapper className={className} label="Dashboard" {...props}>
      <Heading>Dashboard</Heading>
      <Content>
        <Statistics />
      </Content>
    </Wrapper>
  );
};

export default Dashboard;
