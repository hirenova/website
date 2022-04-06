import Heading from "components/Heading";
import Section from "components/Section";
import SectionContent from "components/SectionContent";
import styled from "styled-components";

const Wrapper = styled(Section)`
  padding-top: 80px;
`;

const Content = styled(SectionContent)``;

interface DashboardProps {
  className?: string;
}

const Dashboard = ({ className }: DashboardProps) => {
  return (
    <Wrapper className={className} label="Dashboard">
      <Content>
        <Heading>Dashboard</Heading>
      </Content>
    </Wrapper>
  );
};

export default Dashboard;
