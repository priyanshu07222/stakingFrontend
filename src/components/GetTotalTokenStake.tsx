
import useCallGetFunction from '../utils/readingContract';

export const GetTotalTokenStake = () => {
  const { data, isLoading, error } = useCallGetFunction("getTokenStaked");

  if (isLoading) return <p className='text-center my-8 text-xl font-bold'>Loading...</p>;
  if (error) return <p className='text-center font-semibold text-red-600 text-xl'>Error: Something Went wrong Please refresh</p>;

  return <p className='text-xl font-medium text-center text-gray-500 my-6'>Total ETH Staked:-  <span className='text-black'>{data?.toString()} ETH</span></p>;
}
