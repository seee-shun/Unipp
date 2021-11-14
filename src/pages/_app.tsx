import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Basic } from "../components/Layouts/Basic";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => <Basic>{page}</Basic>);
  return (
    <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
  );
};
export default MyApp;
