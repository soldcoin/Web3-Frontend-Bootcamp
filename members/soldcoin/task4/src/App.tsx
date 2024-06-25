import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from "./wagmi.config";

import {
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react'
import Header from "./components/Header";
import NFTMarketplace from "./Marketplace";

const theme = extendTheme({})


export default function App() {
  const queryClient = new QueryClient()
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <>
            <Header />
            <NFTMarketplace />
          </>
        </ChakraProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
