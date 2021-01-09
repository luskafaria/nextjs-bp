import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import '../../public/fonts/index.css';
import ChakraCustomTheme from 'settings/theme'

export default function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={ChakraCustomTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
