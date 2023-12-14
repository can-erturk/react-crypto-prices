import { useState, useEffect } from 'react'
import { FaBarsStaggered } from 'react-icons/fa6'
import Navigation from '~/components/ui/Navigation'
import sidebarToggle from '~/helpers/sidebarToggle'

function Header() {
  // Create state for sticky header
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    // Window scroll listener function
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    // Listen scroll event
    window.addEventListener('scroll', handleScroll)

    // Remove the event listener when component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={'header ' + (isSticky && 'sticky-header')}>
      <div className="container h-full flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl mr-10">
          <span className="font-extralight">Mee</span>
          <span className="font-semibold">coin</span>
        </div>

        {/* Navbar */}
        <nav className="navbar h-full">
          <Navigation />
        </nav>

        {/* Header button */}
        <a href="#download-now" className="header-btn">
          Download Now
        </a>

        {/* Mobile sidebar toggle */}
        <span
          className="lg:hidden px-3 py-4 cursor-pointer z-[60]"
          onClick={sidebarToggle}
        >
          <FaBarsStaggered />
        </span>
      </div>
    </div>
  )
}

export default Header
