import type { NextPage } from 'next'
import ClaimCard from '../components/claims/card';

const ClaimsPage: NextPage = () => {
  return <>
  <div className='w-4/5 mx-auto'>
    <h1 className='text-xl font-bold text-center mb-10 underline'>Claims</h1>
    <div className="flex
        flex-col space-y-5 space-x-0
        md:flex-row md:space-y-0 md:space-x-5 md:columns-3
    ">
      <ClaimCard name="Iron" id={1} />
      <ClaimCard name="Washing Machine" id={2} />
      <ClaimCard name="Oven" id={3} />
    </div>
  </div>
  </>;
}

export default ClaimsPage;
