import { http, createConfig } from "wagmi";
import { base, mainnet, optimism, anvil } from "wagmi/chains";
import { metaMask, walletConnect, injected, safe } from "wagmi/connectors";

const projectId = "";

export const config = createConfig({
    chains: [ anvil],
    connectors: [injected()],
    transports: {
        [anvil.id]: http()
    }
})