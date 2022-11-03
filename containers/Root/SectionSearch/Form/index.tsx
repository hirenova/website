import FormRaw from "components/Form"
import InputLocations, { Location } from "components/InputLocations"
import { useRouter } from "next/router"
import { ChangeEventHandler, FormEventHandler, useState } from "react"
import styled from "styled-components"
import { encodeURIAll } from "utils"

import Keywords from "./Keywords"
import SubmitButton from "./SubmitButton"

const Wrapper = styled(FormRaw)`
  display: flex;
  color: black;
  gap: 20px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgb(64 79 104 / 5%);
  @media (min-width: 1000px) {
    align-items: center;
    width: 50%;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const Separator = styled.div`
  background: lightgrey;
  @media (min-width: 1000px) {
    height: 100%;
    width: 1px;
  }
  @media (max-width: 1000px) {
    height: 1px;
    width: 100%;
    flex-direction: column;
  }
`

interface FormProps {
  className?: string
}

const Form = ({ className }: FormProps) => {
  const [keywords, setKeywords] = useState<string>("")
  const [locationIds, setLocationIds] = useState<string>("")

  const router = useRouter()

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    router.push(
      encodeURIAll("/jobs", {
        keywords,
        locationIds,
      })
    )
  }

  const onKeywordsChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setKeywords(event.target.value)
  }

  return (
    <Wrapper className={className} onSubmit={onSubmit}>
      <Keywords onChange={onKeywordsChange} />
      <InputLocations
        onChange={(locationIds) => setLocationIds(locationIds.join(","))}
      />
      <SubmitButton />
    </Wrapper>
  )
}

export default Form
