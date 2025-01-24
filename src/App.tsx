import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useAccount } from 'wagmi'
import { config } from './config'
import { WalletOptions } from './components/WalletOptions';
import { Account } from './components/Account';
import { Stake } from './components/Stake';
import { Unstake } from './components/Unstake';

const query = new QueryClient();

function ConnectWallet() {
  const { isConnected } = useAccount()
  if (isConnected) return <Account />
  return <WalletOptions />
}

function App() {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={query}>
          {/* <WalletOptions/> */}
          <div className='max-w-screen-xl mx-auto'>
            <div className='flex justify-between  p-2 mx-2 mb-24 mt-4'>
              <h1 className='text-2xl font-bold'>Staking Emission</h1>
              <ConnectWallet />
            </div>

              <Stake />
              <Unstake />
          </div>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}

export default App
