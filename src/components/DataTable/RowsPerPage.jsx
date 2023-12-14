import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage, setItemsPerPage } from '~/stores/table'
import { scrollToTable } from '~/helpers/scrollToTable'

function RowsPerPage() {
  const dispatch = useDispatch()

  // Get current value of itemsPerPage state
  const { itemsPerPage } = useSelector((state) => state.table)

  const setNewItems = (val) => {
    // Scroll to top the market update section
    scrollToTable()

    // Reset the page number
    dispatch(setCurrentPage(1))

    // Set new value to itemsPerPage state
    const newValue = Number(val)
    dispatch(setItemsPerPage(newValue))
  }

  return (
    <div className="flex gap-4 items-center order-1 max-sm:order-2">
      <span id="row-label" className="flex-shrink-0 text-sm font-medium">
        Rows Per Page:
      </span>
      <select
        className="rows-select"
        id="rows-select"
        defaultValue={itemsPerPage}
        onChange={(e) => setNewItems(e.target.value)}
        aria-labelledby="row-label"
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
      </select>
    </div>
  )
}

export default RowsPerPage
