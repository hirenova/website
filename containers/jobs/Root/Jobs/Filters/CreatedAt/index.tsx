import Field, { FieldProps } from "components/Field"
import FieldContent from "components/FieldContent"
import FieldLabel from "components/FieldLabel"
import Select from "components/Select"
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import styled from "styled-components"

interface CreatedAtProps extends Omit<FieldProps, "children"> {}

const Wrapper = styled(Field)`
  display: flex;
  flex-direction: column;
  width: 100%;
`

type CreatedAtId =
  | "LESS_THAN_1_MONTH_AGO"
  | "LESS_THAN_1_WEEK_AGO"
  | "LESS_THAN_3_DAYS_AGO"
  | "LESS_THAN_1_DAY_AGO"

const options: { [key in CreatedAtId]: { label: string } } = {
  LESS_THAN_1_MONTH_AGO: { label: "Last Month" },
  LESS_THAN_1_WEEK_AGO: { label: "Last Week" },
  LESS_THAN_3_DAYS_AGO: { label: "Last 3 Days" },
  LESS_THAN_1_DAY_AGO: { label: "Last Day" },
}

const CreatedAt = ({ className, ...props }: CreatedAtProps) => {
  const router = useRouter()

  const getInitialOption = (): CreatedAtId => {
    const { filterCreatedAt } = router.query
    return typeof filterCreatedAt === "string" &&
      Object.keys(options).includes(filterCreatedAt)
      ? (filterCreatedAt as CreatedAtId)
      : "LESS_THAN_1_MONTH_AGO"
  }

  const [optionSelected, setOptionSelected] =
    useState<CreatedAtId>(getInitialOption)

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    router.query.filterCreatedAt = event.target.value
    router.push(router)
    setOptionSelected(event.target.value as CreatedAtId)
  }

  return (
    <Wrapper className={className} {...props}>
      <FieldLabel>Creation Time</FieldLabel>
      <FieldContent>
        <Select onChange={onChange} value={optionSelected}>
          {(Object.keys(options) as CreatedAtId[]).map((key) => (
            <option key={key} value={key}>
              {options[key as CreatedAtId].label}
            </option>
          ))}
        </Select>
      </FieldContent>
    </Wrapper>
  )
}

export default CreatedAt
