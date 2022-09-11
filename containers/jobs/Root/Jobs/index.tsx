import Section from "components/Section"
import read from "database/read"
import { useEffect, useState } from "react"
import styled from "styled-components"

import Filters from "./Filters"
import JobCards, { JobCardsProps } from "./JobCards"
import Loading from "./Loading"

const Wrapper = styled(Section)`
  display: flex;
  padding: 100px max(40px, 10%);
  gap: 40px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const Jobs = () => {
  const [jobs, setJobs] = useState<JobCardsProps["jobs"]>([])

  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const getJobs = async () => {
      const jobs = await read.jobCards()
      setJobs(jobs)
      setLoading(false)
    }
    getJobs()
  }, [])

  return (
    <Wrapper label="Jobs">
      <Filters />
      {loading ? <Loading /> : <JobCards jobs={jobs} />}
    </Wrapper>
  )
}

export default Jobs
