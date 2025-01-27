import { useReadContract } from "wagmi"
import { stakeContractAbi } from "../stakeContractABI"

// type FunctionName = typeof stakeContractAbi[number]["getTokenStaked"];
type functionName2 = "getTokenStaked" | "REWARD_PER_SEC_PER_ETH" | "getRewards" | "getTokenStaked" | "lastUpdateTime" | "orcaTokenAddress" | "tokenStaked" | "unclaimedRewards"

const useCallGetFunction = (functionName1: functionName2) => {
    const { data, isLoading, error } = useReadContract({
        address: import.meta.env.VITE_STAKING_CONTRACT_ADDRESS,
        abi: stakeContractAbi,
        functionName: functionName1
    })
    console.log(data, "if any")

    return { data, isLoading, error };
}

export default useCallGetFunction;