import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { AppBase } from "../components/Layouts/AppBase";
import theme from '../styles/theme';
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <AppBase>
          <Component {...pageProps} />
        </AppBase>
      </ChakraProvider>
    </RecoilRoot>
  );
}
export default MyApp;
