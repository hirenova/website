import CheckMultiple from "components/CheckMultiple"
import Field, { FieldProps } from "components/Field"
import FieldContent from "components/FieldContent"
import FieldLabel from "components/FieldLabel"
import styled from "styled-components"

interface ExperienceLevelProps extends Omit<FieldProps, "children"> {}

const Wrapper = styled(Field)`
  display: flex;
  flex-direction: column;
`

const options = {
  ENTRY_LEVEL: { label: "Entry Level" },
  JUNIOR: { label: "Junior" },
  ASSOCIATE: { label: "Associate" },
  MID_SENIOR: { label: "Mid-Senior" },
  SENIOR: { label: "Senior" },
  DIRECTOR: { label: "Director" },
  EXECUTIVE: { label: "Executive" },
}

const ExperienceLevel = ({ className, ...props }: ExperienceLevelProps) => {
  return (
    <Wrapper className={className} {...props}>
      <FieldLabel>Experience Level</FieldLabel>
      <FieldContent>
        <CheckMultiple options={options} queryKey={"filterExperienceLevel"} />
      </FieldContent>
    </Wrapper>
  )
}

export default ExperienceLevel
