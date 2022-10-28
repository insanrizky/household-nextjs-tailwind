import Navbar from './navbar'
import Footer from './footer'
import { ReactNode } from 'react'

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <div className='h-screen flex flex-col space-y-5'>
        <Navbar />
        <main className='px-5 pb-5 pt-20'>{children}</main>
        <Footer />
      </div>
    </>
  )
}
