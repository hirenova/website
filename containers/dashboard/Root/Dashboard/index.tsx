import Heading from "components/Heading";
import Section from "components/Section";
import styled from "styled-components";

const Wrapper = styled(Section)`
  padding-top: 80px;
`;

interface DashboardProps {
  className?: string;
}

const Dashboard = ({ className }: DashboardProps) => {
  return (
    <Wrapper className={className} label="Dashboard">
      <Heading>Dashboard</Heading>
    </Wrapper>
  );
};

export default Dashboard;
