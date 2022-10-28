import type { NextPage } from 'next'
import ProductCard from '../components/products/card';

const ProductsPage: NextPage = () => {
  return <>
    <div className='w-4/5 mx-auto'>
      <h1 className='text-xl font-bold text-center mb-10 underline'>Products</h1>
      <div className="flex
          flex-col space-y-5 space-x-0
          md:flex-row md:space-y-0 md:space-x-5 md:columns-3
      ">
        <ProductCard name="Iron" id={1} />
        <ProductCard name="Washing Machine" id={2} />
        <ProductCard name="Oven" id={3} />
      </div>
    </div>
  </>;
}

export default ProductsPage;
