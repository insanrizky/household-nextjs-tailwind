import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import Input from './components/forms/input';

const LoginPage: NextPage = () => {
  const router = useRouter()

  const onClick = (e: any) => {
    e.preventDefault()
    router.push('/admin/products')
  }

  return <>
    <div className='w-80 mx-auto'>
      <h1 className='text-xl font-bold text-center mb-10 underline'>Enter Your Credentials</h1>
      <form>
        <div className="grid grid-cols-1 gap-6">
          <Input type="text" label="Username" placeholder='example' required />
          <Input type="password" label="Password" placeholder='########' required />
          <button type="submit" onClick={onClick} className='bg-slate-900 rounded text-white py-2'>Sign In</button>
        </div>
      </form>
    </div>
  </>;
}

export default LoginPage;
