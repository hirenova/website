import Checkbox from "components/Checkbox"
import CheckboxGroup from "components/CheckboxGroup"
import CheckMultiple from "components/CheckMultiple"
import Field, { FieldProps } from "components/Field"
import FieldContent from "components/FieldContent"
import FieldLabel from "components/FieldLabel"
import { useRouter } from "next/router"
import { useState } from "react"
import styled from "styled-components"

interface TimeProps extends Omit<FieldProps, "children"> {}

const Wrapper = styled(Field)`
  display: flex;
  flex-direction: column;
`

const options = {
  FULL_TIME: { label: "Full Time" },
  PART_TIME: { label: "Part Time" },
}

const Time = ({ className, ...props }: TimeProps) => {
  return (
    <Wrapper className={className} {...props}>
      <FieldLabel>Time</FieldLabel>
      <FieldContent>
        <CheckMultiple options={options} queryKey={"filterTime"} />
      </FieldContent>
    </Wrapper>
  )
}

export default Time
