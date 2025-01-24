import React from 'react'
import useCallGetFunction from '../utils/readingContract';

export const GetTotalTokenStake = () => {
    // function data1() { console.log("heelo"); useCallGetFunction('getTokenStaked')}
    const { data, isLoading, error } = useCallGetFunction("getTokenStaked");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <p>Total Tokens Staked: {data?.toString()}</p>;
  // return (
  //   <div>
  //       <button className='p-3 bg-red-600 rounded' onClick={data1}>Token staked</button>
  //   </div>
  // )
}
