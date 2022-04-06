import Box, { BoxProps } from "components/Box";
import React, {
  Dispatch,
  ProviderProps,
  SetStateAction,
  createContext,
  useState,
} from "react";
import styled from "styled-components";

export interface PageContextValue {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const InitialPageContextValue: PageContextValue = {
  sidebarOpen: false,
  setSidebarOpen: () => {},
};

export const PageContext = createContext(InitialPageContextValue);

export interface PageProviderProps extends BoxProps {}

const PageContent = styled(Box)``;

const PageProvider = ({ children, className, ...props }: PageProviderProps) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <PageContext.Provider value={{ sidebarOpen, setSidebarOpen }} {...props}>
      <PageContent className={className} {...props}>
        {children}
      </PageContent>
    </PageContext.Provider>
  );
};

export default PageProvider;
