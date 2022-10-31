import Box from "components/Box"
import ButtonNavigation from "components/ButtonNavigation"
import Section from "components/Section"
import SectionContent from "components/SectionContent"
import SectionLabel from "components/SectionLabel"
import styled from "styled-components"

const Wrapper = styled(Section)``

const Content = styled(SectionContent)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #9b268c;
  color: white;
  padding: 40px 10%;
`

const Label = styled(Box)`
  font-weight: bold;
  font-size: 20px;
`

const SearchJobsButton = styled(ButtonNavigation)`
  padding: 20px;
  background: white;
  color: #9b268c;
`

const SearchCandidatesButton = styled(ButtonNavigation)`
  padding: 20px;
  background: #f083e1;
  color: white;
  :hover {
    color: #9b268c;
  }
`

const Buttons = styled(Box)`
  display: flex;
  gap: 20px;
`

interface JobsProps {
  className?: string
}

const Jobs = ({ className }: JobsProps) => {
  return (
    <Wrapper className={className} label="Search">
      <Content>
        <Label>Your dream jobs are waiting</Label>
        <Buttons>
          <SearchJobsButton redirect={{ pathname: "/jobs" }}>
            Search Jobs
          </SearchJobsButton>
          <SearchCandidatesButton redirect={{ pathname: "/candidates" }}>
            Search Candidates
          </SearchCandidatesButton>
        </Buttons>
      </Content>
    </Wrapper>
  )
}

export default Jobs
