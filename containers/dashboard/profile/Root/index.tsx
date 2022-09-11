import Page from "components/Page"
import PageDashboard from "components/PageDashboard"
import styled from "styled-components"

const Wrapper = styled(PageDashboard)``

interface RootProps {
  className?: string
}

const Root = ({ className }: RootProps) => {
  return (
    <Wrapper className={className} displayConditionProfileTypeId="always">
      Profile
    </Wrapper>
  )
}

export default Root
