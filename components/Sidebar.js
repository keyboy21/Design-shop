import Link from "next/link"
const Sidebar = () => {
  return (
    <aside aria-label="Sidebar" className="bg-blue-for-admin  rounded-tr-[30px]">
      <div className="overflow-y-auto pt-[54px] w-[263px] rounded-tr-[30px] text-white-for-admin dark:bg-blue-for-admin">
        <ul className="space-y-[10px] pl-[60px] ">
          <li className="pl-[30px] py-4 active:bg-white-for-admin active:text-blue-for-admin active:rounded-l-full">
            <a className="flex items-center ">
              <i className="fa-solid fa-house"></i>
              <span className="ml-4  text-base font-medium leading-5">Главная</span>
            </a>
          </li>
          <li className="pl-[30px] py-4 active:bg-white-for-admin active:text-blue-for-admin active:rounded-l-full">
            <a className="flex items-center">
              <i className="fa-regular fa-rectangle-list"></i>
              <span className=" ml-4 whitespace-nowrap  text-base font-medium leading-5">Заказы</span>
            </a>
          </li>
          <li className="pl-[30px] py-4  active:bg-white-for-admin active:text-blue-for-admin active:rounded-l-full">
            <a className="flex items-center">
              <i className="fa-solid fa-bag-shopping"></i>
              <span className=" ml-4 whitespace-nowrap  text-base font-medium leading-5">Товары</span>
            </a>
          </li>
          <li className="pl-[30px] py-4 active:bg-white-for-admin active:text-blue-for-admin active:rounded-l-full ">
            <a className="flex items-center">
              <i className="fa-regular fa-star"></i>
              <span className=" ml-4 whitespace-nowrap  text-base font-medium leading-5">Отзывы</span>
            </a>
          </li>
          <li className="pl-[30px] py-4 bg-white-for-admin text-blue-for-admin rounded-l-full" aria-current="page">
            <Link href='/' className="flex items-center ">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className=" ml-4 whitespace-nowrap text-base font-medium leading-5 ">Оформить заказ</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
