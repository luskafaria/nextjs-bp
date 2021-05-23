import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/dist/next-server/lib/router/router";

import theme from "@/settings/theme";
import FontsComponent from "@/settings/theme/FontsComponent";

export default function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <FontsComponent />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
