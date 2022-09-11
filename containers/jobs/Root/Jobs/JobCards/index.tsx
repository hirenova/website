import Box, { BoxProps } from "components/Box"
import CardJob, { CardJobProps } from "components/CardJob"
import styled from "styled-components"

const Wrapper = styled(Box)`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  gap: 20px;
  height: fit-content;
`

export interface JobCardsProps extends Omit<BoxProps, "children"> {
  className?: string
  jobs: CardJobProps["job"][]
}

const JobCards = ({ className, jobs }: JobCardsProps) => {
  return (
    <Wrapper className={className}>
      {jobs.map((job, index) => (
        <CardJob key={index} job={job} />
      ))}
    </Wrapper>
  )
}

export default JobCards
