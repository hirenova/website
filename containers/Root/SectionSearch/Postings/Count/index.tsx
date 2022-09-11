import Box, { BoxProps } from "components/Box"
import Spinner from "components/Spinner"
import read from "database/read"
import { useEffect, useState } from "react"
import styled from "styled-components"

const Wrapper = styled(Box)`
  display: inline;
`

interface CountProps extends BoxProps {}

const Count = ({ className }: CountProps) => {
  const [count, setCount] = useState<number>()

  useEffect(() => {
    const getCount = async () => {
      const count = await read.jobCount()
      setCount(count)
    }
    getCount()
  }, [])

  return <Wrapper className={className}>{count ? count : <Spinner />}</Wrapper>
}

export default Count
