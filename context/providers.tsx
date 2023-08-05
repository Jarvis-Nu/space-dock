"use client"

import { ConnectKitProvider, getDefaultConfig } from "connectkit"
import { WagmiConfig, createConfig } from "wagmi"
import { optimism, optimismGoerli } from "wagmi/chains"

const alchemyId = process.env.ALCHEMY_OPTIMISM_GOERLI_KEY
const walletConnectProjectId = process.env.WALLETCONNECT_PROJECT_ID || ""

const chains = [optimism, optimismGoerli]

const config = createConfig(
  getDefaultConfig({
    alchemyId,
    walletConnectProjectId,
    chains,
    appName: "Space Dock",

    appDescription:
      "ETHGlobal: Retro PGF - Space Dock is a space for keep track of your impact in the Optimism ecosystem.",
    appUrl: "#",
    appIcon: "#",
  })
)

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>{children}</ConnectKitProvider>
    </WagmiConfig>
  )
}
