import CheckMultiple from "components/CheckMultiple"
import Field, { FieldProps } from "components/Field"
import FieldContent from "components/FieldContent"
import FieldLabel from "components/FieldLabel"
import styled from "styled-components"

interface FormatProps extends Omit<FieldProps, "children"> {}

const Wrapper = styled(Field)`
  display: flex;
  flex-direction: column;
`

const options = {
  ON_SITE: { label: "On-Site" },
  HYBRID: { label: "Hybrid" },
  REMOTE: { label: "Remote" },
}

const Format = ({ className, ...props }: FormatProps) => {
  return (
    <Wrapper className={className} {...props}>
      <FieldLabel>Format</FieldLabel>
      <FieldContent>
        <CheckMultiple options={options} queryKey={"filterFormat"} />
      </FieldContent>
    </Wrapper>
  )
}

export default Format
