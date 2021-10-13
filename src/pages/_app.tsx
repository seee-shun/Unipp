import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { AppBase } from "../components/Layouts/AppBase";
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppBase>
        <Component {...pageProps} />
      </AppBase>
    </ChakraProvider>
  );
}
export default MyApp;
