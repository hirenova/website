import { UseToastOptions, useToast as useChakraToast } from "@chakra-ui/react"

const useToast = (options?: UseToastOptions) => {
  const defaultOptions: UseToastOptions = {
    isClosable: true,
    position: "bottom",
    variant: "solid",
  }
  const toast = useChakraToast({ ...defaultOptions, ...options })
  return toast
}

export default useToast
