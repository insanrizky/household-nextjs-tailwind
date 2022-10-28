import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='text-center py-10 border-slate-200 border-2'>
      <div className='mb-10'>
        <h1 className="text-3xl font-bold">
          Welcome to Warranty Claims Platform
        </h1>
        <h5>WaveTech Electronics Pte Ltd</h5>
      </div>
      <div>
        <Link href="/login">
          <span className='p-2 cursor-pointer rounded border-2 border-slate-700 hover:bg-slate-700 hover:text-white transition-all'>
            Get Started
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Home
