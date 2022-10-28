import Link from "next/link";
import { useRouter } from "next/router";
import cx from 'classnames';

export default function Navbar() {
  const router = useRouter();

  const isAuthenticated = router.pathname !== '/login' && router.pathname !== '/';
  const isProductPage = router.pathname === '/admin/products';
  const isClaimPage = router.pathname === '/admin/claims';

  return (
    <div className="container fixed right-0 left-0 bg-white">
      <div className='flex justify-between items-center px-6 py-5 border-slate-700 border-b-2'>
        <h5 className="text-3xl font-bold">
          <Link href="/">
            WaveTech
          </Link>
        </h5>
        <div className="flex space-x-3">
          {!isAuthenticated &&
            <Link href="/login">
              <span className='px-2 py-1 cursor-pointer rounded border-2 border-slate-700 hover:bg-slate-700 hover:text-white transition-all'>
                Login
              </span>
            </Link>
          }

          {isAuthenticated &&
            <Link href="/admin/products">
              <span className={cx('px-2 py-1 cursor-pointer rounded border-2 hover:border-slate-700 transition-all',
                {
                  'border-white': !isProductPage,
                  'border-slate-700': isProductPage,
                }
              )}>
                Products
              </span>
            </Link>
          }

          {isAuthenticated &&
            <Link href="/admin/claims">
              <span className={cx('px-2 py-1 cursor-pointer rounded border-2 hover:border-slate-700 transition-all',
                {
                  'border-white': !isClaimPage,
                  'border-slate-700': isClaimPage,
                }
              )}>
                Claims
              </span>
            </Link>
          }
        </div>
      </div>
    </div >
  )
}
