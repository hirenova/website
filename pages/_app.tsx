import "config/firebase";
import "@fontsource/montserrat";
import "@fontsource/montserrat/500.css";

import "../styles/globals.css";

import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
