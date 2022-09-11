import Box, { BoxProps } from "components/Box"
import { JobCardResponse } from "database/read"
import styled from "styled-components"

const Wrapper = styled(Box)``

interface OrganizationProps extends Omit<BoxProps, "children"> {
  organization: JobCardResponse["Organization"]
}

const JobOrganization = ({
  className,
  organization,
  ...props
}: OrganizationProps) => {
  return (
    <Wrapper className={className} {...props}>
      {organization.title}
    </Wrapper>
  )
}

export default JobOrganization
