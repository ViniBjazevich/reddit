import type { AppProps } from "next/app";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import Layout from "../components/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraBaseProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraBaseProvider>
    </Provider>
  );
}
