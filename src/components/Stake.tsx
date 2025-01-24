import React from 'react'
import { useAccount, useTransaction, useWriteContract } from 'wagmi'
import { stakeContractAbi } from '../stakeContractABI'
import { GetTotalTokenStake } from './GetTotalTokenStake';
import { parseEther } from 'viem';

export const Stake = () => {
    const { data, writeContract, error, isError } = useWriteContract();
    const [amount, setAmount] = React.useState(0);
    const {isConnected} = useAccount();
    // useTransaction();
    // const {config} = usePrepareContractWrite

    async function callStake() {
        writeContract({
            abi: stakeContractAbi,
            address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
            functionName: 'stake',
            args: [
                BigInt(amount)
            ],
            value: parseEther(amount.toString())
        })
    }

    if(error){
        <p>Error2:{error.message}</p>
    }
    return (isConnected ?
        (<div className=''>
            <h2 className='text-2xl font-bold text-center mt-10'>Stake Ether</h2>
            <p className='text-center text-gray-500'>Stake ETH and receive OrcaCoin while staking</p>
            <div className='flex flex-col p-8 shadow-lg w-1/3 mx-auto my-6 rounded-lg'>
                <input className='border outline-none p-2 rounded-lg' onChange={(e) => setAmount(parseInt(e.target.value))} type="number" placeholder='Staking Amount' />
                <button className='bg-green-700 text-white font-semibold p-2 rounded-lg my-4' onClick={() => callStake()}>Stake</button>
                <div>
                    <div className='flex justify-between text-gray-500'>
                        <p>Reward fee</p>
                        <p>10%</p>
                    </div>
                </div>
            </div>
            <GetTotalTokenStake/>
        </div>) : (
            <div className='text-center font-bold '>Connect wallet first</div>
        )
    )
}
