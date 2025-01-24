import React from 'react'
import { useAccount, useWriteContract } from 'wagmi'
import { stakeContractAbi } from '../stakeContractABI'

export const Unstake = () => {
    const { data, writeContract } = useWriteContract();
    const [amount, setAmount] = React.useState(0);

    const { isConnected } = useAccount()

    async function callUnStake() {
        writeContract({
            abi: stakeContractAbi,
            address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
            functionName: 'unstake',
            args: [
                BigInt(amount)
            ]
        })
    }
    return ( isConnected ? 
        (<div className=''>
            <h2 className='text-2xl font-bold text-center mt-10'>Withdrawls</h2>
            <p className='text-center text-gray-500'>Request staked ETH withdrawls</p>
            <div className='flex flex-col p-8 shadow-lg w-1/3 mx-auto my-6 rounded-lg'>
                <input className='border outline-none p-2 rounded-lg' onChange={(e) => setAmount(parseInt(e.target.value))} type="number" placeholder='UnStak ETH Amount' />
                <button className='bg-green-700 text-white font-semibold p-2 rounded-lg my-4' onClick={() => callUnStake()}>Unstake</button>
                <div>
                    <div className='flex justify-between text-gray-500'>
                        <p>Reward fee</p>
                        <p>10%</p>
                    </div>
                </div>
            </div>
        </div>) : (
            <div className='text-center font-bold '>Connect wallet first</div>
        )
    )
}
