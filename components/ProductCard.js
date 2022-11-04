import Image from 'next/image'
import Phone from '../public/image 21Phone.png'
const ProductCard = () => {
  return (
    <div className="min-w-[192px] bg-white-for-admin p-3 rounded-xl">
      <div className="relative bg-ProductBackground flex justify-center py-4 rounded-md">
        <span className="absolute left-1 top-3">Skidka</span>
        <Image src={Phone} alt="Product" />
      </div>

      <div className="space-y-1 mt-[6px]">
        <p className="not-italic font-normal text-base leading-4 tracking-[-o.3px]">Смартфон Samsung G...</p>
        <p className="not-italic font-medium text-base lead-[18px]">7 300 000 сум </p>
        <p className='text-Notification text-xs'>
          <span className="px-[6px] py-[2px] bg-Extra text-white-for-admin rounded-sm mr-[6px]"> от 2 435 000 сум</span>х24
        </p>
      </div>
    </div>
  )
}

export default ProductCard
