import { useConnect, useDisconnect, useAccount } from "wagmi"

export const WalletOptions = () => {
  const { connectors, connect } = useConnect()
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  console.log("my address is", address)
  return !isConnected ? <div className="mt-2 sm:mx-0 lg:mx-0 sm:flex lg:justify-cente lg:justify-start"> {(connectors.map((connector) => (

    <button className="py-2 px-4 mb-2 bg-gray-700 text-sm text-white mr-4 cursor-pointer rounded-lg" key={connector.uid} onClick={() => connect({ connector })}>{connector.name}</button>

  )))}</div> :
    (<div className="flex justify-between bg-red-500">
      <p>{address}</p>
      <button onClick={() => disconnect()}>DisConnect</button>
    </div>)
}
