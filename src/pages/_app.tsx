import type { AppProps } from "next/app";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import Layout from "../components/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraBaseProvider>
  );
}
