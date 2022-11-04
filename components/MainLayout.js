import Navbar from './Navbar'
import Sidebar from './Sidebar'
const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="flex">
        <Sidebar />
        {children}
      </main>
    </>
  )
}

export default MainLayout
