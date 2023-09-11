import { BiSort } from "react-icons/bi"
import { useSelector } from "react-redux"

function SortingIcon({ id }) {

  const sortConfig = useSelector(state => state.table.sortConfig)

  if (sortConfig.key === id) {
    const iconClass = sortConfig.direction === "ascending" ? "asc-icon" : "desc-icon"

    return (
      <span className={iconClass}>
        <BiSort size={20} />
      </span>
    )
  }

  return <BiSort className="opacity-30" size={20} />
}

export default SortingIcon
