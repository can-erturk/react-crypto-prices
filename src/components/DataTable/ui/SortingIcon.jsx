import { BiSort } from "react-icons/bi"
import { useSelector } from "react-redux"

function SortingIcon({ id }) {

  const sortConfig = useSelector(state => state.table.sortConfig)

  if (sortConfig.key === id) {
    if (sortConfig.direction === "ascending") {
      return (
        <span className="ascending-sort-icon">
          <BiSort size={20} />
        </span>
      )
    } else {
      return (
        <span className="descending-sort-icon">
          <BiSort size={20} />
        </span>
      )
    }
  } else {
    return <BiSort className="opacity-30" size={20} />
  }
}

export default SortingIcon
