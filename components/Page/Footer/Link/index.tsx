import LinkRaw, { LinkProps as LinkRawProps } from "components/Link"
import styled from "styled-components"

const Wrapper = styled(LinkRaw)`
  text-decoration: underline;
`

interface LinkProps extends LinkRawProps {}

const Link = ({ className, ...props }: LinkProps) => {
  return <Wrapper className={className} target={"_blank"} {...props} />
}

export default Link
