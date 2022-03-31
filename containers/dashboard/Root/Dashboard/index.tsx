import Section from "components/Section";
import styled from "styled-components";

// import { Button } from "@chakra-ui/react";
// import { MouseEventHandler } from "react";
// import { doc, updateDoc } from "firebase/firestore";

const Wrapper = styled(Section)`
  padding-top: 80px;
`;

interface DashboardProps {
  className?: string;
}

const Title = styled.div`
  font-size: 20px;
`;

const Dashboard = ({ className }: DashboardProps) => {
  // const onClick: MouseEventHandler<HTMLButtonElement> = () => {};

  return (
    <Wrapper className={className} label="Dashboard">
      <Title>Dashboard</Title>
      {/* <Button onClick={onClick}>Write</Button> */}
    </Wrapper>
  );
};

export default Dashboard;
