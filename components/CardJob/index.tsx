import Box from "components/Box";
import Card, { CardProps } from "components/Card";
import DateTime from "components/DateTime";
import Location from "components/Location";
import PayAmountPeriod from "components/PayAmountPeriod";
import { JobDocumentData } from "providers/AppProvider";
import styled from "styled-components";

import Company from "./Company";
import JobType from "./JobType";
import Title from "./Title";

const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid #e6e7e9;
`;

const RowCompanyJobType = styled(Box)`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const RowDatePostedLocation = styled(Box)`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: auto;
`;

interface CardJobProps extends CardProps {
  jobDocumentData: Partial<JobDocumentData>;
}

const CardJob = ({
  className,
  children,
  jobDocumentData,
  ...props
}: CardJobProps) => {
  return (
    <Wrapper className={className} {...props}>
      <RowCompanyJobType>
        <Company>{jobDocumentData.company}</Company>
        <JobType jobTypeId="full_time" />
      </RowCompanyJobType>
      <Title>{jobDocumentData.title}</Title>
      <RowDatePostedLocation>
        <DateTime date={new Date("2022-03-10")} showDifference />
        {jobDocumentData.location ? (
          <Location location={jobDocumentData.location} />
        ) : null}
      </RowDatePostedLocation>
      <PayAmountPeriod amount={1000} period="Month" />
    </Wrapper>
  );
};

export default CardJob;
