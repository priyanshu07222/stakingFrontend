import { Connector, useConnect, useDisconnect, useAccount } from "wagmi"

export const WalletOptions = () => {
  // const {connectors, connect} = useConnect()
  const { connectors, connect } = useConnect()
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  console.log("my address is", address)
  return !isConnected ? <div className="px-10"> {(connectors.map((connector) => (

    <button className="py-2 px-4 bg-gray-700 text-white mx-4 rounded-lg" key={connector.uid} onClick={() => connect({ connector })}>{connector.name}</button>

  )))}</div> :
    (<div className="flex justify-between bg-red-500">
      <p>{address}</p>
      <button onClick={() => disconnect()}>DisConnect</button>
    </div>)
}
