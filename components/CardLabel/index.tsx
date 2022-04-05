import { HeadingProps } from "@chakra-ui/react";
import Heading from "components/Heading";
import styled from "styled-components";

const Wrapper = styled(Heading)``;

interface CardLabelProps extends HeadingProps {}

const CardLabel = ({ className, size = "md", ...props }: CardLabelProps) => {
  return <Wrapper className={className} size={size} {...props} />;
};

export default CardLabel;
