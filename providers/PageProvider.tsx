import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface PageContextValue {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const InitialPageContextValue: PageContextValue = {
  sidebarOpen: false,
  setSidebarOpen: () => {},
};

export const PageContext = createContext(InitialPageContextValue);

export interface PageProviderProps {
  children: React.ReactNode;
}
const PageProvider = ({ children }: PageProviderProps) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <PageContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
