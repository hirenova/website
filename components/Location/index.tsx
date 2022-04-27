import Box, { BoxProps } from "components/Box";
import moment from "moment";
import { FiMapPin } from "react-icons/fi";
import styled from "styled-components";

const Wrapper = styled(Box)`
  display: flex;
  gap: 5px;
  align-items: center;
  width: fit-content;
  opacity: 0.7;
`;

interface LocationProps extends Omit<BoxProps, "children"> {
  location: string;
}

const Location = ({ className, location }: LocationProps) => {
  return (
    <Wrapper className={className}>
      <FiMapPin />
      {location}
    </Wrapper>
  );
};

export default Location;
