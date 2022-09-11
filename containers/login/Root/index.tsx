import Page from "components/Page"
import styled from "styled-components"

import SectionLogin from "./SectionLogin"

const Wrapper = styled(Page)``

const Root = () => {
  return (
    <Wrapper
      title="Log in"
      showLogin={false}
      showFooter={false}
      displayConditionAuthId="not_logged_in"
      displayConditionProfileTypeId="always"
    >
      <SectionLogin />
    </Wrapper>
  )
}

export default Root
