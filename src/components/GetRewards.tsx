import React from 'react'
import useCallGetFunction from '../utils/readingContract'

export const GetRewards = () => {
  const [shouldITrigger, setShouldITrigger] = React.useState(true)
  const data = useCallGetFunction('getRewards')
  return (
    <div className=''>
      <h2 className='text-2xl font-bold text-center mt-10'>Reward Collected</h2>
      <p className='text-center text-gray-500'>Total ORCA collected(reward)</p>
      <div className='sm:flex sm:items-center sm:justify-between my-8'>

        <p className='font-bold text-gray-500 text-center sm:text-start'>Reward Earned <br /> <span className='text-black'>{data.data?.toString()} ORCA</span></p>
        <button onClick={() => setShouldITrigger(prev => !prev)} className='bg-gray-500 px-4 mx-4 sm:mx-0 my-4 py-2 text-white font-semibold rounded-lg active:scale-105'>Get Rewards</button>
      </div>
    </div>
  )
}