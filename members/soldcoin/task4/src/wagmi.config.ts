import { createConfig, http, type Config } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'

export const config: Config = createConfig({
  chains: [sepolia],
  connectors: [
    metaMask({
      // infuraAPIKey: import.meta.env.VITE_INFURA_API_KEY,
    })
  ],
  transports: {
    [sepolia.id]: http(`https://sepolia.infura.io/v3/${import.meta.env.VITE_INFURA_API_KEY}`),
  },
})
