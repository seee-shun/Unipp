import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { Basic } from "../components/Layouts/Basic"
import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"
import { RecoilRoot } from "recoil"

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => <Basic>{page}</Basic>);
  return (
    <RecoilRoot>
      <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
    </RecoilRoot>
  );
};
export default MyApp;
