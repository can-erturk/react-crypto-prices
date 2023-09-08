import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa"
import { useSelector } from "react-redux"

function SortingIcon({ id }) {

  const sortConfig = useSelector(state => state.table.sortConfig)

  if (sortConfig.key === id) {
    return sortConfig.direction === "ascending" ? <FaSortAmountUp /> : <FaSortAmountDown />
  }
}

export default SortingIcon
