import { UrlObject } from "url"

import {
  Button as ButtonChakra,
  ButtonProps as ButtonChakraProps,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { MouseEventHandler } from "react"
import styled from "styled-components"

const Wrapper = styled(ButtonChakra)`
  :focus {
    /* box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6) !important; */
    /* box-shadow: none !important; */
  }
`

interface UrlObjectExtended extends UrlObject {
  target?: "_blank"
}

export interface ButtonProps extends ButtonChakraProps {
  redirect?: UrlObjectExtended
}

const Button = ({ className, redirect, onClick, ...props }: ButtonProps) => {
  const router = useRouter()
  const onClickIntercept: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (redirect?.target && redirect?.pathname) {
      open(redirect.pathname, "_blank", "noopener,noreferrer")
    } else if (redirect) router.push(redirect)
    if (onClick) onClick(event)
  }
  return (
    <Wrapper
      className={className}
      // colorScheme={"#ffffff"}
      onClick={onClickIntercept}
      {...props}
    />
  )
}

export default Button
