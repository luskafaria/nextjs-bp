import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
