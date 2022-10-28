import Link from "next/link";

interface IProductCard {
  id: number;
  name: string;
}
const ProductCard = (props: IProductCard) => {
  return (
    <div className='w-full drop-shadow border'>
      <div className='hover:underline cursor-pointer p-4'>
        {props.name}
      </div>
      <div className='flex justify-end space-x-2 p-4 bg-slate-100'>
        <button className='bg-sky-700 text-white text-sm rounded px-2 py-1'>
          <span onClick={() => console.log('should have a form update')}>Update</span>
        </button>
        <button className='border-2 border-red-400 text-red-500 text-sm rounded px-2 py-1'>
          <span onClick={() => alert('removed')}>Remove</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;