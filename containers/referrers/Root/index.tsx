import Page from "components/Page"
import styled from "styled-components"

const Wrapper = styled(Page)`
  margin-top: 80px;
`

const Root = () => {
  return (
    <Wrapper
      title="Referrers"
      displayConditionAuthId="always"
      displayConditionProfileTypeId="always"
    ></Wrapper>
  )
}

export default Root
