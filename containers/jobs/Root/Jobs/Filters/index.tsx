import Card, { CardProps } from "components/Card"
import CardLabel from "components/CardLabel"
import styled from "styled-components"

import CreatedAt from "./CreatedAt"
import ExperienceLevel from "./ExperienceLevel"
import Extent from "./Extent"
import Format from "./Format"
import Time from "./Time"

const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid #e6e7e9;
  height: fit-content;
  width: 300px;
`

interface FiltersProps extends Omit<CardProps, "children"> {}

const Filters = ({ className }: FiltersProps) => {
  return (
    <Wrapper className={className}>
      <CardLabel>Filters</CardLabel>
      <Time />
      <Extent />
      <Format />
      <CreatedAt />
      <ExperienceLevel />
    </Wrapper>
  )
}

export default Filters
