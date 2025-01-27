import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

  return (
    <div className='flex justify-between items-center gap-4 px-2 mt-2'>
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && <div className='truncate font-light text-sm  '><div className='w-44 truncate font-semibold' >{ensName ? `${ensName} (${address})` : address}</div></div>}
      {address && <button className='bg-red-600 px-2 sm:px-4 text-sm py-1 sm:py-2 rounded-lg text-white font-semibold active:scale-105' onClick={() => disconnect()}>Disconnect</button>}
    </div>
  )
}