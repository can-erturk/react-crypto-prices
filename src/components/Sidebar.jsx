import { FaXmark } from "react-icons/fa6"
import Navigation from "~/components/ui/Navigation"
import sidebarToggle from "~/helpers/sidebarToggle"

function Sidebar() {
  return (
    <>
      <aside className="mobile-sidebar">

        {/* Sidebar close */}
        <span className="sidebar-close" onClick={sidebarToggle}>
          <FaXmark size={20} />
        </span>

        {/* Navigation items */}
        <Navigation />
      </aside>

      {/* Mobile sidebar backdrop */}
      <div className="sidebar-backdrop" onClick={sidebarToggle}></div>
    </>
  )
}

export default Sidebar