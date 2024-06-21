import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { injected } from "wagmi/connectors"

export default function Header() {
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()
  const account = useAccount()

  const handleWalletConnect = () => {
    if(account.isConnecting) return

    if (account.isConnected) {
      disconnect()
      return;
    }

    connect({ connector: injected() })
  }

  return (
    <header className="bg-gray-100">
      <div className="flex px-4 h-16 items-center">
        <div>
          <a href="/">
            Marketplace
          </a>
        </div>
        <button
          onClick={handleWalletConnect}
          className="ml-auto"
        >
          {account.isConnected ? account.address : 'Connect Wallet'}
        </button>
      </div>
    </header>
  )
}
