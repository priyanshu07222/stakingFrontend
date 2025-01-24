import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

  return (
    <div className='flex justify-between items-center gap-4'>
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && <div className='truncate w-44 font-light'><div >{ensName ? `${ensName} (${address})` : address}</div></div>}
      <button className='bg-red-600 px-4 py-2 rounded-lg text-white font-semibold' onClick={() => disconnect()}>Disconnect</button>
    </div>
  )
}