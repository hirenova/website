import { AppContext } from "providers/AppProvider"
import { useContext } from "react"

const useApp = () => {
  const { ...appContextValue } = useContext(AppContext)
  return { ...appContextValue }
}

export default useApp
