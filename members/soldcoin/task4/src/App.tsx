import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Header from "./components/Header";
import { config } from "./wagmi.config";




export default function App() {
  const queryClient = new QueryClient()
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <div>hello world</div>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
