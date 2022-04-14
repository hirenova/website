import { StyledComponent } from "@emotion/styled";
import styled, { StyledComponentProps } from "styled-components";

// import {Image as ChakraImage, ImageProps as ChakraImageProps} from "@chakra-ui/react"

const Wrapper = styled.img``;

export interface ImageProps
  extends StyledComponentProps<"img", any, {}, never> {}

const Image = ({ className, ...props }: ImageProps) => {
  return <Wrapper className={className} {...props} />;
};

export default Image;
