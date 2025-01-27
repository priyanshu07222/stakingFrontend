import React from 'react'
import { useAccount, useWriteContract } from 'wagmi'
import { stakeContractAbi } from '../stakeContractABI'
import { GetTotalTokenStake } from './GetTotalTokenStake';

export const Unstake = () => {
    const { writeContract } = useWriteContract();
    const [amount, setAmount] = React.useState(0);

    const { isConnected } = useAccount()

    async function callUnStake() {
        writeContract({
            abi: stakeContractAbi,
            address: import.meta.env.VITE_STAKING_CONTRACT_ADDRESS,
            functionName: 'unstake',
            args: [
                BigInt(amount)
            ]
        })
    }
    return (isConnected ?
        (<div className=''>
            <h2 className='text-2xl font-bold text-center mt-10'>Withdrawls</h2>
            <p className='text-center text-gray-500'>Request staked ETH withdrawls</p>
            <GetTotalTokenStake />
            <div className='flex flex-col p-12 shadow-xl mx-4 sm:w-2/3 lg:w-1/3 sm:mx-auto my-6 rounded-lg'>
                <input className='border outline-none p-2 rounded-lg' onChange={(e) => setAmount(parseInt(e.target.value))} type="number" placeholder='UnStak ETH Amount' />
                <button className='bg-green-700 text-white font-semibold p-2 rounded-lg my-4 active:scale-105' onClick={() => callUnStake()}>Unstake</button>
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
