const Pagination = () => {
  return (
    <nav className="w-full inline-flex justify-between mb-[30px] mt-[30px]" aria-label="Page navigation example">
      <div>
        <a href="#">
          <i className="fa-solid fa-chevron-left text-lg"></i>
        </a>
      </div>
      <ul className="inline-flex items-center space-x-px text-base font-semibold not-italic">
        <li>
          <a  className="py-2 px-3 active:bg-Primarygreen rounded-[10px] active:text-white-for-admin ">
            1
          </a>
        </li>
        <li>
          <a  className="py-2 px-3 bg-Primarygreen rounded-[10px] text-white-for-admin">
            2
          </a>
        </li>
        <li>
          <a  aria-current="page" className="py-2 px-3 active:bg-Primarygreen rounded-[10px] active:text-white-for-admin">
            3
          </a>
        </li>
        <li>
          <a  className="py-2 px-3 active:bg-Primarygreen rounded-[10px] active:text-white-for-admin">
            4
          </a>
        </li>
        <li>
          <a  className="py-2 px-3 active:bg-Primarygreen rounded-[10px] active:text-white-for-admin ">
            5
          </a>
        </li>
        <li>
          <a  className="py-2 px-3 active:bg-Primarygreen rounded-[10px] active:text-white-for-admin ">
            ...
          </a>
        </li>
        <li>
          <a  className="py-2 px-3 active:bg-Primarygreen rounded-[10px] active:text-white-for-admin ">
            10
          </a>
        </li>
      </ul>
      <div>
        <a href="#">
          <i className="fa-solid fa-chevron-right text-lg"></i>
        </a>
      </div>
    </nav>
  )
}

export default Pagination
