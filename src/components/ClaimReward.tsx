
import { useWriteContract } from 'wagmi'
import { stakeContractAbi } from '../stakeContractABI'
import { GetRewards } from './GetRewards';

export const ClaimReward = () => {
    const { writeContract } = useWriteContract();

    async function claimReward() {
        writeContract({
            abi: stakeContractAbi,
            address: import.meta.env.VITE_STAKING_CONTRACT_ADDRESS,
            functionName: "claimRewards",
            args: []
        })
    }
    return (
        <div className='sm:w-2/3 lg:w-1/3 sm:mx-auto mx-28 my-12'>
            <GetRewards />
            <button className='bg-green-500 w-full font-bold text-white rounded-full py-2 px-4 cursor-pointer active:scale-105' onClick={() => claimReward}>Claim reward</button>
        </div>
    )
}
