import CardJob from "components/CardJob";
import Section from "components/Section";
import useApp from "hooks/useApp";
import styled from "styled-components";

const Wrapper = styled(Section)`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  padding: 100px max(40px, 10%);
  gap: 20px;
`;

interface JobsProps {
  className?: string;
}

const Jobs = ({ className }: JobsProps) => {
  const { jobsCollectionData } = useApp();

  return (
    <Wrapper className={className} label="Jobs">
      {jobsCollectionData?.map((jobDocumentData, index) => (
        <CardJob key={index} jobDocumentData={jobDocumentData} />
      ))}
    </Wrapper>
  );
};

export default Jobs;
