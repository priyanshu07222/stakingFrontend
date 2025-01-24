import { useReadContract } from "wagmi"
import { stakeContractAbi } from "../stakeContractABI"
import { type UseReadContractParameters } from 'wagmi'

// type FunctionName = typeof stakeContractAbi[number]["getTokenStaked"];
type functionName2 = "getTokenStaked" | "REWARD_PER_SEC_PER_ETH" | "getRewards" | "getTokenStaked" | "lastUpdateTime" | "orcaTokenAddress" | "tokenStaked" | "unclaimedRewards"

const useCallGetFunction = (functionName1: functionName2) => {
    console.log("kuch huwa")
    const { data, isLoading, error } = useReadContract({
        address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
        abi: stakeContractAbi,
        functionName: functionName1
    })
    console.log(data, "if any")

    return {data, isLoading, error};
}

export default useCallGetFunction;