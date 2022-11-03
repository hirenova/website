import {
  Input,
  InputGroup,
  InputLeftElement,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react"
import Box, { BoxProps } from "components/Box"
import Button from "components/Button"
import Spinner from "components/Spinner"
import Tag from "components/Tag"
import useGeolocation from "hooks/useGeolocation"
import { ChangeEventHandler, useEffect, useState } from "react"
import { FaMapMarkerAlt, FaPlus, FaTimes } from "react-icons/fa"
import styled from "styled-components"

const Wrapper = styled(InputGroup)`
  display: flex;
  flex-direction: column;
`

const Tags = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
`

const TagReturned = styled(Tag)`
  border: 1px solid lightgrey;
  :hover {
    background: #759bc8;
  }
`

const TagSelected = styled(Tag)`
  background: #b05dc4;
  color: white;
  :hover {
    background: #f89393;
  }
`

export interface Location {
  lat: number
  lon: number
  label: string
  importance: number
  id: number
}

interface InputLocationsProps extends Omit<BoxProps, "onChange"> {
  onChange: (locationIds: number[]) => any
}

const InputLocations = ({ className, onChange }: InputLocationsProps) => {
  const [query, setQuery] = useState<string>("")
  const [locationsReturned, setLocationsReturned] = useState<Location[]>([])
  const [locationsSelected, setLocationsSelected] = useState<Location[]>([])
  const [locationsSelectedIds, setLocationsSelectedIds] = useState<number[]>([])
  const [loadingCount, setLoadingCount] = useState<number>(0)

  const geolocation = useGeolocation()

  const onInputChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    await search(event.target.value)
  }

  const search = async (query: string) => {
    setLoadingCount((loadingCount) => (loadingCount += 1))
    setQuery(query)
    const results = await geolocation.search({ query })
    const resultsMap = results
      .map((result) => ({ ...result, parts: result.label.split(", ") }))
      .filter((result) => result.parts.length <= 6)
      .reduce(
        (previous, current) => ({ ...previous, [current.label]: current }),
        {}
      )
    const locations = Object.values(resultsMap)
      .sort((first: any, second: any) =>
        first.parts.length <= second.parts.length ? -1 : 1
      )
      .map((result: any) => {
        const { lat, lon, label, importance, id } = result
        return { lat, lon, label, importance, id }
      })
    console.log(locations)
    setLocationsReturned(locations)
    setLoadingCount((loadingCount) => (loadingCount -= 1))
  }

  const select = (id: number) => {
    if (locationsSelectedIds.includes(id)) return
    const location = locationsReturned.find((location) => location.id === id)
    if (!location) return
    setLocationsSelected([...locationsSelected, location])
    setLocationsSelectedIds([...locationsSelectedIds, id])
    setQuery("")
  }

  const unselect = (id: number) => {
    const locations = locationsSelected.filter((location) => location.id !== id)
    setLocationsSelected(locations)
    const locationsSelectedIds = locations.map((location) => location.id)
    setLocationsSelectedIds(locationsSelectedIds)
  }

  useEffect(() => {
    onChange(locationsSelectedIds)
  }, [locationsSelectedIds])

  return (
    <Wrapper className={className}>
      <InputLeftElement>
        <FaMapMarkerAlt />
      </InputLeftElement>
      <Input
        onChange={onInputChange}
        placeholder="City, Country"
        value={query}
      />
      {query ? (
        <Tags>
          {loadingCount === 0 ? (
            locationsReturned
              .filter((location) => !locationsSelectedIds.includes(location.id))
              .map((location) => (
                <TagReturned
                  key={location.id}
                  onClick={() => select(location.id)}
                  as={Button}
                >
                  <TagLeftIcon boxSize="12px" as={FaPlus} />
                  <TagLabel>{location.label}</TagLabel>
                </TagReturned>
              ))
          ) : (
            <Spinner />
          )}
        </Tags>
      ) : null}
      <Tags>
        {locationsSelected.map((location) => (
          <TagSelected
            key={location.id}
            as={Button}
            onClick={() => unselect(location.id)}
          >
            <TagLeftIcon as={FaTimes} />
            <TagLabel>{location.label}</TagLabel>
          </TagSelected>
        ))}
      </Tags>
    </Wrapper>
  )
}

export default InputLocations
