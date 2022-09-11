import CheckMultiple from "components/CheckMultiple"
import Field, { FieldProps } from "components/Field"
import FieldContent from "components/FieldContent"
import FieldLabel from "components/FieldLabel"
import styled from "styled-components"

interface ExtentProps extends Omit<FieldProps, "children"> {}

const Wrapper = styled(Field)`
  display: flex;
  flex-direction: column;
`

const options = {
  CONTRACT: { label: "Contract" },
  INTERNSHIP: { label: "Internship" },
  TEMPORARY: { label: "Temporary" },
  LONG_TERM: { label: "Long Term" },
}

const Extent = ({ className, ...props }: ExtentProps) => {
  return (
    <Wrapper className={className} {...props}>
      <FieldLabel>Extent</FieldLabel>
      <FieldContent>
        <CheckMultiple options={options} queryKey={"filterExtent"} />
      </FieldContent>
    </Wrapper>
  )
}

export default Extent
