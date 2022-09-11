import React, { Dispatch, SetStateAction, createContext, useState } from "react"

interface AppContextValue {
  sidebarOpen: boolean
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const InitialAppContextValue: AppContextValue = {
  sidebarOpen: false,
  setSidebarOpen: () => undefined,
}

export const AppContext = createContext(InitialAppContextValue)

interface AppProviderProps {
  children: React.ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [sidebarOpen, setSidebarOpen] = useState<
    AppContextValue["sidebarOpen"]
  >(InitialAppContextValue["sidebarOpen"])

  const value: AppContextValue = {
    sidebarOpen,
    setSidebarOpen,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
