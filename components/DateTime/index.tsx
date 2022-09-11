import Box, { BoxProps } from "components/Box"
import moment from "moment"
import { FaRegClock } from "react-icons/fa"
import styled from "styled-components"

const Wrapper = styled(Box)`
  display: flex;
  gap: 5px;
  align-items: center;
  width: fit-content;
  opacity: 0.7;
`

interface DateTimeProps extends Omit<BoxProps, "children"> {
  date: Date
  typeId?: "date" | "time" | "date_time"
  showDifference?: boolean
  format?: string
}

const DateTime = ({
  className,
  date,
  showDifference = false,
  format = "YYYY-MM-DD",
}: DateTimeProps) => {
  return (
    <Wrapper className={className}>
      <FaRegClock />
      {showDifference
        ? moment(date)
            .fromNow()
            .replace("a day ago", "Yesterday")
            .replace("a ", "One ")
        : moment(date).format(format)}
    </Wrapper>
  )
}

export default DateTime
