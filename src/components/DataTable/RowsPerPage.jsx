import { useDispatch, useSelector } from "react-redux"
import { setCurrentPage, setItemsPerPage } from "~/stores/table"

function RowsPerPage() {

  const dispatch = useDispatch()

  // Get current value of itemsPerPage state
  const { itemsPerPage } = useSelector(state => state.table)

  const setNewItems = (val) => {
    // Reset the page number
    dispatch(setCurrentPage(1))

    // Set new value to itemsPerPage state
    const newValue = Number(val)
    dispatch(setItemsPerPage(newValue))
  }

  return (
    <div className="flex gap-4 items-center order-1 max-sm:order-2">
      <label className="flex-shrink-0 text-sm font-medium">Rows Per Page:</label>
      <select className="rows-select" defaultValue={itemsPerPage} onChange={(e) => setNewItems(e.target.value)}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
      </select>
    </div>
  )
}

export default RowsPerPage