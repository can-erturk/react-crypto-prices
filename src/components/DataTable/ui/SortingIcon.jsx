import { BiSort } from "react-icons/bi"
import { useSelector } from "react-redux"

function SortingIcon({ id }) {

  // Get sortConfig state from table store
  const { sortConfig } = useSelector(state => state.table)

  if (sortConfig.key === id) {
    const iconClass = sortConfig.direction === "ascending" ? "asc-icon" : "desc-icon"

    // Conditional rendering based on the sorting key
    return (
      <span className={iconClass}>
        <BiSort size={20} />
      </span>
    )
  }

  // Render the sorting icon as default
  return <BiSort className="opacity-30" size={20} />
}

export default SortingIcon
