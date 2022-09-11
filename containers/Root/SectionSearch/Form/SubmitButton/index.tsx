// import Button from "components/Button";

import { Button } from "@chakra-ui/react"
import styled from "styled-components"

const Wrapper = styled(Button)`
  background: #3169ad;
  /* font-size: 18px;
  border-radius: 6px; */
  border: 2px solid #3169ad;
  color: white;
  /* transition: 0.2s; */
  /* font-weight: 500; */
  :hover {
    background: white;
    color: #3169ad;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`

interface SubmitButtonProps {
  className?: string
}

const SubmitButton = ({ className, ...props }: SubmitButtonProps) => {
  return (
    <Wrapper className={className} type="submit" {...props}>
      Search
    </Wrapper>
  )
}

export default SubmitButton
