import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface PageContextValue {
  sideBarOpen: boolean;
  setSideBarOpen: Dispatch<SetStateAction<boolean>>;
}

const InitialPageContextValue: PageContextValue = {
  sideBarOpen: false,
  setSideBarOpen: () => {},
};

export const PageContext = createContext(InitialPageContextValue);

export interface PageProviderProps {
  children: React.ReactNode;
}
const PageProvider = ({ children }: PageProviderProps) => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  return (
    <PageContext.Provider value={{ sideBarOpen, setSideBarOpen }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
