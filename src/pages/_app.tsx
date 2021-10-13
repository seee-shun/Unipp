import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AppBase } from "../components/Layouts/AppBase";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AppBase>
        <Component {...pageProps} />
      </AppBase>
    </ChakraProvider>
  );
}
export default MyApp;
