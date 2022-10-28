import Link from "next/link";

interface IClaimCard {
  id: number;
  name: string;
}
const ClaimCard = (props: IClaimCard) => {
  return (
    <div className='flex justify-between items-center w-full drop-shadow border p-4'>
      <div className='hover:underline cursor-pointer'>
        {props.name}
      </div>
      <div className='flex space-x-2'>
        <button className='bg-green-700 text-white text-sm rounded px-2 py-1'>
          <span onClick={() => alert('approved')}>Approve</span>
        </button>
        <button className='border-2 border-red-400 text-red-500 text-sm rounded px-2 py-1'>
          <span onClick={() => alert('rejected')}>Reject</span>
        </button>
      </div>
    </div>
  );
}

export default ClaimCard;