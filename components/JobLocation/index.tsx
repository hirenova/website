import Box, { BoxProps } from "components/Box"
import { FiMapPin } from "react-icons/fi"
import styled from "styled-components"

const Wrapper = styled(Box)`
  display: flex;
  gap: 5px;
  align-items: center;
  width: fit-content;
  opacity: 0.7;
`

interface JobLocation {
  title: string
}

interface JobLocationProps extends Omit<BoxProps, "children"> {
  location: JobLocation
}

const JobLocation = ({ className, location }: JobLocationProps) => {
  return (
    <Wrapper className={className}>
      <FiMapPin />
      {location.title}
    </Wrapper>
  )
}

export default JobLocation
