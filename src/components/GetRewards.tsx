import React from 'react'
import callGetFunction from '../utils/readingContract'

export const GetRewards = async () => {
    const data = await callGetFunction('getRewards')
  return (
    <div>
        <button>Get Rewards</button>
    </div>
  )
}
