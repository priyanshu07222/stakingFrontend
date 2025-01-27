import React from 'react'
import EthereumLogo from "../assets/ethereum.svg"
import { Footer } from './Footer'
import { ConnectWallet } from '../App'
import { useAccount } from 'wagmi'
import { Stake } from './Stake'
import { Unstake } from './Unstake'
import { ClaimReward } from './ClaimReward'

export const Landing = () => {
    const { isConnected } = useAccount();
    const [isStake, setIsStake] = React.useState(true);
    const [isUnStake, setIsUnStake] = React.useState(false);
    const [isClaim, setIsClaim] = React.useState(false);
    return (
        <div className=''>
            {
                !isConnected ? (
                    <div className='lg:flex lg:justify-between lg:items-cente sm:mx-10 lg:mx-0 sm:py-12 sm:justify-between lg:h-[75vh] bg-red-3'>
                        <div className='px-4 bg-green-40'>
                            <h1 className='text-3xl text-center sm:text-left sm:text-4xl lg:text-5xl font-medium text-gray-400 font-mono lg:w-2/3'>Stake Ether to earn <br /> <span className='text-4xl sm:text-6xl lg:text-7xl text-black font-bold'>Orca Coin</span> while you sleep</h1>
                            <p className='text-gray-500 my-6 sm:my-8 text-center sm:text-start sm:text-lg font-mono'>Don't just hold, Earn interest every single second on your <span className='font-bold text-xl'>ETH</span> </p>
                            {
                                !isConnected && (<ConnectWallet />)
                            }
                        </div>
                        <div className='flex justify-center items-center my-12 lg:my-0 lg:block '>
                            <img className='w-64 sm:w-80 lg:w-96' src={EthereumLogo} alt="" />
                        </div>
                    </div>) : (<div className='sm:h-[75vh]'>
                        <div className='flex items-center mx-4 sm:w-1/2  border rounded-full sm:mx-auto'>
                            <p onClick={() => {
                                setIsStake(true);
                                setIsClaim(false);
                                setIsUnStake(false)
                            }} className={`w-1/3 ${isStake && "bg-gray-500 text-white"} text-center py-2 ${!isStake && "hover:bg-gray-100"} transition-all duration-300 font-semibold text-lg sm:text-xl rounded-full cursor-pointer`}>Stake</p>
                            <p onClick={() => {
                                setIsStake(false);
                                setIsClaim(false);
                                setIsUnStake(true)
                            }} className={`w-1/3 ${isUnStake && "bg-gray-500 text-white"} text-center ${!isUnStake && "hover:bg-gray-100"} transition-all duration-300 py-2 text-whie font-semibold text-lg sm:text-xl rounded-full cursor-pointer`}>Unstake</p>
                            <p onClick={() => {
                                setIsStake(false);
                                setIsClaim(true);
                                setIsUnStake(false)
                            }} className={`w-1/3 ${isClaim && "bg-gray-500 text-white"} text-center py-2 ${!isClaim && "hover:bg-gray-100"} transition-all duration-300 text-whie font-semibold text-lg lg:text-xl rounded-full cursor-pointer`}>Claim reward</p>
                        </div>
                        {isStake && <Stake />}
                        {isUnStake && <Unstake />}
                        {isClaim && <ClaimReward />}
                    </div>)
            }

            <Footer />
        </div>
    )
}
