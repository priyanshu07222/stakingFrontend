import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useAccount } from 'wagmi'
import { config } from './config'
import { WalletOptions } from './components/WalletOptions';
import { Account } from './components/Account';
import { Landing } from './components/Landing';

const query = new QueryClient();

export function ConnectWallet() {
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
            <p className='text-center text-xs lg:text-sm pt-4 text-red-500 sm:font-semibold border-b'>Disclaimer: Currently Active on Sepolia Testnet</p>
            <div className='sm:flex sm:justify-between sm:items-center  mx-4  mb-4 sm:mb-24 my-2 x-auto '>
              <h1 className='sm:text-2xl font-bold text-2xl  text-center'>Staking Emission</h1>
              <div className='hidden sm:block'>

                <ConnectWallet />
              </div>
            </div>
            <div className='sm:hidden mb-8 px-2'>
              <Account />
            </div>
            <Landing />
          </div>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}

export default App
