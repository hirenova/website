import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled(InputGroup)`
  @media (min-width: 1000px) {
    width: fit-content;
  }
`;

interface LocationProps extends Pick<InputProps, "className" | "onChange"> {}

const Location = ({ className, onChange }: LocationProps) => {
  return (
    <Wrapper className={className}>
      <InputLeftElement>
        <FaMapMarkerAlt />
      </InputLeftElement>
      <Input onChange={onChange} placeholder="Country, city" />
    </Wrapper>
  );
};

export default Location;
