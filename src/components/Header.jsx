import { FaBarsStaggered, FaXmark } from "react-icons/fa6"

function Header() {

  // Mobile sidebar open/close function.
  const sidebarToggle = () => {
    document.querySelector('.mobile-sidebar').classList.toggle('sidebar-show')
  }

  return (
    <div className="bg-transparent absolute w-full h-28">
      <div className="container h-full flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-3xl">
          <span className="font-extralight">Mee</span><span className="font-semibold">Coin</span>
        </div>
        
        {/* Navbar (Mobile sidebar) */}
        <nav className="navbar mobile-sidebar h-full">
          <span className="sidebar-close" onClick={sidebarToggle}>
            <FaXmark size={20} />
          </span>
          <a href="#" className="p-2 uppercase">Home</a>
          <a href="#" className="p-2 uppercase">Popular</a>
          <a href="#" className="p-2 uppercase">Coin List</a>
        </nav>
        
        {/* Mobile sidebar backdrop */}
        <div className="sidebar-backdrop" onClick={sidebarToggle}></div>
        
        <a href="#" className="navbar-btn">Get In Touch</a>
        
        {/* Mobile sidebar toggle */}
        <span className="lg:hidden px-3 py-4" onClick={sidebarToggle}>
          <FaBarsStaggered />
        </span>

      </div>
    </div>
  )
}

export default Header