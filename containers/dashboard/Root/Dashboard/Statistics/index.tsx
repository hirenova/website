import { Icon } from "@chakra-ui/react";
import Box, { BoxProps } from "components/Box";
import Heading from "components/Heading";
import { FaEye, FaProjectDiagram, FaSave, FaSuitcase } from "react-icons/fa";
import styled from "styled-components";

import Statistic from "./Statistic";

const Wrapper = styled(Box)`
  display: grid;
  gap: 20px;
  padding: 20px;
  @media (max-width: 800px) {
    grid-template-columns: auto;
  }
  @media (min-width: 800px) and (max-width: 1300px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }
  @media (min-width: 1300px) {
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto;
  }
`;

const StatIcon = styled(Icon)`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  grid-row: span 2;
  grid-column: 1;
  height: 60px;
  width: 60px;
`;

const StatLabel = styled(Box)`
  grid-row: 1;
  grid-column: 2;
`;

const StatNumber = styled(Heading)`
  grid-row: 2;
  grid-column: 2;
`;

interface StatisticsProps extends BoxProps {}

const Statistics = ({ className, ...props }: StatisticsProps) => {
  return (
    <Wrapper className={className} {...props}>
      <Statistic>
        <StatIcon as={FaSuitcase} color="#6fbdea" />
        <StatLabel>Job applications</StatLabel>
        <StatNumber size={"lg"}>13</StatNumber>
      </Statistic>
      <Statistic>
        <StatIcon as={FaProjectDiagram} color="#2768AE" />
        <StatLabel>Referrals</StatLabel>
        <StatNumber size={"lg"}>2</StatNumber>
      </Statistic>
      <Statistic>
        <StatIcon as={FaEye} color="#7A2E8F" />
        <StatLabel>Views</StatLabel>
        <StatNumber size={"lg"}>165</StatNumber>
      </Statistic>
      <Statistic>
        <StatIcon as={FaSave} color="#ab2260" />
        <StatNumber size={"lg"}>7</StatNumber>
        <StatLabel>Saved jobs</StatLabel>
      </Statistic>
    </Wrapper>
  );
};

export default Statistics;
