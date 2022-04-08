import "config/firebase";
import "@fontsource/montserrat";
import "@fontsource/montserrat/500.css";

import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import AppProvider from "providers/AppProvider";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ChakraProvider>
  );
}

export default App;
