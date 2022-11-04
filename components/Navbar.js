const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div className="ml-16 py-5">
        <span>LOGO</span>
      </div>
      <ul className="flex">
        <li className="flex items-center mr-10">
          <i className="fa-solid fa-bell text-[20px] text-Notification relative">
            <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-[17px] h-[17px] text-xs font-bold text-white-for-admin bg-[#00C48C] rounded-full border-0">1</div>
          </i>
        </li>
        <li className="flex items-center pr-16 pl-16 rounded-bl-[30px] not-italic font-normal text-lg text-white-for-admin leading-[19px] bg-blue-for-admin">
          Личный кабинет
          <span className="ml-3 text-[30px]">
            <i className="fa-solid fa-circle-user"></i>
          </span>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
