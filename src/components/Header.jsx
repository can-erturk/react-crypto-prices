import { FaBarsStaggered } from "react-icons/fa6"
import Navigation from "~/components/ui/Navigation"
import sidebarToggle from "~/helpers/sidebarToggle"

function Header() {
  return (
    <div className="absolute w-full h-28 max-sm:h-20">
      <div className="container h-full flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-3xl mr-10">
          <span className="font-extralight">Mee</span><span className="font-semibold">Coin</span>
        </div>
        
        {/* Navbar */}
        <nav className="navbar h-full">
          <Navigation />
        </nav>
        
        {/* Header button */}
        <a href="#" className="header-btn">Get In Touch</a>
        
        {/* Mobile sidebar toggle */}
        <span className="lg:hidden px-3 py-4 cursor-pointer z-50" onClick={sidebarToggle}>
          <FaBarsStaggered />
        </span>

      </div>
    </div>
  )
}

export default Header