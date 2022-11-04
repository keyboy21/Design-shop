import ProductCard from './ProductCard'
import Pagination from './Pagination'
import Samsung1 from '../public/image 21Phone.png'
import Samsung from '../public/image 26Samsung.png'
import IPhone from '../public/image 22Iphone.png'
import AirPods from '../public/image 23airp.png'
const arr = [
  { id: 2, name: 'Смартфон Samsung G...', img: Samsung1 },
  { id: 1, name: 'Смартфон Apple iphon...', img: IPhone },
  { id: 3, name: 'Наушники Apple Airpo...', img: AirPods },
  { id: 4, name: 'Смартфон Apple iphon...', img: IPhone },
  { id: 5, name: 'Samsung Galaxy Z Fold...', img: Samsung },
  { id: 6, name: 'Смартфон Samsung G...', img: Samsung1 },
  { id: 7, name: 'Смартфон Samsung G...', img: Samsung1 },
  { id: 8, name: 'Наушники Apple Airpo...', img: AirPods },
  { id: 9, name: 'Смартфон Apple iphon...', img: IPhone },
  { id: 10, name: 'Samsung Galaxy Z Fold...', img: Samsung },
]
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

      <div className="grid grid-cols-5 gap-5">
        {arr.map((item) => (
          <ProductCard key={item.id} name={item.name} image={item.img} id={item.id} />
        ))}
      </div>
      <Pagination />
    </div>
  )
}

export default Products
