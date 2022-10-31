import Page from "components/Page"
import styled from "styled-components"

import Description from "./Description"
import Jobs from "./Jobs"

const Wrapper = styled(Page)`
  margin-top: 80px;
`

const Root = () => {
  return (
    <Wrapper
      title="About"
      displayConditionAuthId="always"
      displayConditionProfileTypeId="always"
    >
      <Description />
      <Jobs />
    </Wrapper>
  )
}

export default Root
