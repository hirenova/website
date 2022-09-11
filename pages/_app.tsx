import "@fontsource/montserrat"
import "@fontsource/montserrat/500.css"

import "../styles/globals.css"

import { ChakraProvider } from "@chakra-ui/react"
import { Auth } from "@supabase/ui"
import supabase from "config/supabase"
import type { AppProps } from "next/app"
import AppProvider from "providers/AppProvider"
import SupabaseProvider from "providers/SupabaseProvider"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <SupabaseProvider>
          <AppProvider>
            <Component {...pageProps} />
          </AppProvider>
        </SupabaseProvider>
      </Auth.UserContextProvider>
    </ChakraProvider>
  )
}

export default App
