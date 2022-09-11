import Page from "components/Page"
import { useRouter } from "next/router"
import styled from "styled-components"

import Jobs from "./Jobs"

const Wrapper = styled(Page)`
  margin-top: 80px;
`

const Root = () => {
  const router = useRouter()

  return (
    <Wrapper
      title="Jobs"
      displayConditionAuthId="always"
      displayConditionProfileTypeId="always"
    >
      {router.isReady ? <Jobs /> : null}
    </Wrapper>
  )
}

export default Root
