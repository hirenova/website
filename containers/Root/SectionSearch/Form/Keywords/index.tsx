import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa"
import styled from "styled-components"

const Wrapper = styled(InputGroup)`
  @media (min-width: 1000px) {
    width: fit-content;
  }
`

interface KeywordsProps extends Pick<InputProps, "className" | "onChange"> {}

const Keywords = ({ className, onChange }: KeywordsProps) => {
  return (
    <Wrapper className={className}>
      <InputLeftElement>
        <FaSearch />
      </InputLeftElement>
      <Input onChange={onChange} placeholder="Keywords, job title, company" />
    </Wrapper>
  )
}

export default Keywords
