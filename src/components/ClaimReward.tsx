import React from 'react'
import { useWriteContract } from 'wagmi'
import { stakeContractAbi } from '../stakeContractABI'

export const ClaimReward = () => {
    const { data, writeContract } = useWriteContract();

    async function claimReward() {
        writeContract({
            abi: stakeContractAbi,
            address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
            functionName: "claimRewards",
            args: []
        })
    }
    return (
        <div>
            <button onClick={() => claimReward}>Claim reward</button>
        </div>
    )
}
