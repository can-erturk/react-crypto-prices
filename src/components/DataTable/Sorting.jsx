import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setCurrentPage, setSortConfig, setSortedData } from "~/stores/table"
import SortingIcon from "~/components/DataTable/ui/SortingIcon"

function Sorting() {
  const dispatch = useDispatch()

  // Get states
  const { prices } = useSelector(state => state.crypto)
  const { sortConfig } = useSelector(state => state.table)

  // Copy data for sorting
  const sortedData = [...prices]
  
  // Perform sorting
  if (sortConfig.key) {
    sortedData.sort((a, b) => {
      const val1 = a[sortConfig.key]
      const val2 = b[sortConfig.key]

      if (val1 < val2) {
        return sortConfig.direction === 'ascending' ? -1 : 1
      } else if (val1 > val2) {
        return sortConfig.direction === 'ascending' ? 1 : -1
      } else {
        return 0
      }
    })
  }

  // Define a function for sorting
  const requestSort = (key) => {
    let direction = 'descending'
    if (sortConfig.key === key && sortConfig.direction === 'descending') {
      direction = 'ascending'
    }

    // Update sorting configuration and reset the page number
    dispatch(setCurrentPage(1))
    dispatch(setSortConfig({ key, direction }))
  }

  // Update sorted data when sort config changes
  useEffect(() => {
    dispatch(setSortedData(sortedData))
  }, [prices, sortConfig])

  return (
    <tr>
      <th className="table-title sm:pl-6" onClick={() => requestSort('name')}>
        <div className="table-title-inner">
          <span>Asset</span>
          <SortingIcon id="name" />
        </div>
      </th>
      <th className="table-title" onClick={() => requestSort('current_price')}>
        <div className="table-title-inner">
          <span>Current Price</span>
          <SortingIcon id="current_price" />
        </div>
      </th>
      <th className="table-title sm:text-right sm:pr-6" onClick={() => requestSort('price_change_percentage_24h')}>
        <div className="table-title-inner sm:justify-end">
          <SortingIcon id="price_change_percentage_24h" />
          <span>24h %</span>
        </div>
      </th>
      <th className="table-title sm:text-right sm:pr-6" onClick={() => requestSort('market_cap')}>
        <div className="table-title-inner sm:justify-end">
          <SortingIcon id="market_cap" />
          <span>Market Cap</span>
        </div>
      </th>
    </tr>
  )
}

export default Sorting
