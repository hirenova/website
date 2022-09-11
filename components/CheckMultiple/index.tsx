import { BoxProps } from "components/Box"
import Checkbox from "components/Checkbox"
import CheckboxGroup from "components/CheckboxGroup"
import Field from "components/Field"
import { useRouter } from "next/router"
import { useState } from "react"
import styled from "styled-components"

const Wrapper = styled(Field)`
  display: flex;
  flex-direction: column;
`

const CheckBoxGroupStyled = styled(CheckboxGroup)`
  display: flex;
  flex-direction: column;
`

interface CheckMultipleProps<OptionId extends string>
  extends Omit<BoxProps, "children"> {
  options: { [key in OptionId]: { label: string } }
  queryKey: string
}

const CheckMultiple = <OptionId extends string>({
  className,
  options,
  queryKey,
  ...props
}: CheckMultipleProps<OptionId>) => {
  const router = useRouter()

  const getStringsFromUrl = (): string[] => {
    const queryValue = router.query[queryKey]
    if (typeof queryValue === "string") return [queryValue]
    if (typeof queryValue === "object") return queryValue
    return []
  }

  const getOptionsFromUrl = (): OptionId[] => {
    const stringsFromUrl = getStringsFromUrl()
    const optionIds = Object.keys(options)
    const optionsFromUrl = stringsFromUrl.filter((item) =>
      optionIds.includes(item)
    ) as OptionId[]
    return optionsFromUrl
  }

  const [optionsFromUrl, setOptionsFromUrl] =
    useState<OptionId[]>(getOptionsFromUrl)

  const setOptionsInUrl = (optionsSelected: OptionId[]) => {
    router.query[queryKey] = optionsSelected
    router.push(router, undefined, { scroll: false })
  }

  const onChange = (optionsSelected: OptionId[]) => {
    setOptionsInUrl(optionsSelected)
    setOptionsFromUrl(optionsSelected)
    setIsAllSelected(!optionsSelected.length)
  }

  const [isAllSelected, setIsAllSelected] = useState<boolean>(
    () => !optionsFromUrl.length
  )

  return (
    <Wrapper className={className} {...props}>
      <Checkbox onChange={() => onChange([])} isChecked={isAllSelected}>
        All
      </Checkbox>
      <CheckBoxGroupStyled onChange={onChange} value={optionsFromUrl}>
        {Object.keys(options).map((key) => (
          <Checkbox key={key} value={key}>
            {options[key as OptionId].label}
          </Checkbox>
        ))}
      </CheckBoxGroupStyled>
    </Wrapper>
  )
}

export default CheckMultiple
