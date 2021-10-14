import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { HeaderOnly } from "../components/Layouts/HeaderOnly";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <HeaderOnly>
        <Component {...pageProps} />
      </HeaderOnly>
    </ChakraProvider>
  );
}
export default MyApp;
