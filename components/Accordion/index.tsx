import {
  Accordion as ChakraAccordion,
  AccordionProps as ChakraAccordionProps,
} from "@chakra-ui/react"
import styled from "styled-components"

const Wrapper = styled(ChakraAccordion)``

interface AccordionProps extends ChakraAccordionProps {}

const Accordion = ({ className, ...props }: AccordionProps) => {
  return <Wrapper className={className} {...props}></Wrapper>
}

export default Accordion
