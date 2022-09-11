import Box from "components/Box"
import Card, { CardProps } from "components/Card"
import DateTime from "components/DateTime"
import JobLocation from "components/JobLocation"
import JobOrganization from "components/JobOrganization"
import JobPay from "components/JobPay"
import { JobCardResponse } from "database/read"
import styled from "styled-components"

import JobType from "./JobType"
import Title from "./Title"

const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid #e6e7e9;
`

const RowOrganizationJobType = styled(Box)`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

const RowDatePostedLocation = styled(Box)`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: auto;
`

// const salaryPeriodMultiplier = {
//   year: 1,
//   month: 12,
//   week: 52,
//   day: 250,
//   hour: 2000,
// }

// const calculateYearlySalary = ({
//   amount,
//   currencyId,
//   periodId,
// }: JobPay): JobPay => ({
//   amount: amount * salaryPeriodMultiplier[periodId],
//   currencyId,
//   periodId: "year",
// })

// type JobTime = "full_time" | "part_time"

// type JobType = "internship" | "regular" | "contract"

// export interface Job {
//   title: string
//   organization: Organization
//   pay?: JobPay
//   location: JobLocation
//   type: JobType
//   time: JobTime
//   description: string
// }

export interface CardJobProps extends Omit<CardProps, "children"> {
  job: JobCardResponse
}

const CardJob = ({ className, job, ...props }: CardJobProps) => {
  return (
    <Wrapper className={className} {...props}>
      <RowOrganizationJobType>
        <JobOrganization organization={job.Organization} />
        <JobType jobTypeId="full_time" />
      </RowOrganizationJobType>
      <Title>{job.title}</Title>
      <RowDatePostedLocation>
        <DateTime date={new Date(job.createdAt)} showDifference />
        <JobLocation location={{ title: job.locationTitle }} />
      </RowDatePostedLocation>
      <JobPay
        pay={{
          amount: job.payAmount,
          currencyId: job.payCurrency,
          periodId: job.payPeriod,
        }}
      />
    </Wrapper>
  )
}

export default CardJob
