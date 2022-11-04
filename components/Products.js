import ProductCard from './ProductCard'
import Pagination from './Pagination'

const Products = () => {
  return (
    <div className="min-w-[1097px] px-7 pt-5 mt-5 ml-5 mb-4 bg-Content rounded-md">
      <div className="mb-5">
        <div className="not-italic text-[12px] mb-[30px] space-x-1">
          <span className="text-Notification font-normal  leading-[14px]">Заявки</span>
          <i className="fa-solid fa-angle-right text-Notification"></i>
          <span className="text-Primarygreen font-medium  leading-[14px]">Оформить заказ</span>
        </div>
        <h1 className="text-blue-for-admin text-[22px] leading-[26px]  font-semibold mb-5">Оформить заказ</h1>
        <div className="relative w-full mb-[30px]">
          <input type="search" className="p-4 w-full rounded-[26px] z-20 text-base text-gray-900 bg-gray-50 " placeholder="Поиск по названию товара" />
          <button type="submit" className="absolute top-0 right-0 p-4 text-sm rounded-r-[26px] w-[100px] bg-Primarygreen">
            <i className="fa-solid fa-magnifying-glass text-white-for-admin text-base"></i>
          </button>
        </div>
        <span className="font-semibold text-base leading-5 not-italic">Все товары (121)</span>
      </div>

      <div className="grid grid-cols-4 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Pagination />
    </div>
  )
}

export default Products
