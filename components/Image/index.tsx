import styled, { StyledComponentProps } from "styled-components"

const Wrapper = styled.img``

export interface ImageProps
  extends StyledComponentProps<"img", object, object, never> {}

const Image = ({ className, ...props }: ImageProps) => {
  return <Wrapper className={className} {...props} />
}

export default Image
