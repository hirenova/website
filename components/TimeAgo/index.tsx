import { BoxProps } from "@chakra-ui/react";
import Box from "components/Box";
import moment from "moment";
import styled from "styled-components";

const Wrapper = styled(Box)``;

interface TimeAgoProps extends Omit<BoxProps, "children"> {
  date: Date;
}

const TimeAgo = ({ className, date, ...props }: TimeAgoProps) => {
  return (
    <Wrapper className={className} {...props}>
      {moment(date).fromNow()}
    </Wrapper>
  );
};

export default TimeAgo;
