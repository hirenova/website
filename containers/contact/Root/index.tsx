import Page from "components/Page"
import styled from "styled-components"

import Contact from "./Contact"

const Wrapper = styled(Page)`
  margin-top: 80px;
`

const Root = () => {
  return (
    <Wrapper
      title="Contact"
      displayConditionAuthId="always"
      displayConditionProfileTypeId="always"
    >
      <Contact />
    </Wrapper>
  )
}

export default Root
