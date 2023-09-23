import { useSelector } from "react-redux"
import TableItem from "~/components/DataTable/TableItem"
import Pagination from "~/components/DataTable/Pagination"
import Sorting from "~/components/DataTable/Sorting"
import RowsPerPage from "~/components/DataTable/RowsPerPage"

function Table() {
  
  // Get paginatedData state from the table store
  const { paginatedData } = useSelector(state => state.table)

  return (
    <div id="marketUpdate">
      <div className="bg-primary sm:border sm:border-default sm:rounded-xl sm:overflow-hidden">
        <table className="w-full striped">
          <thead className="hidden border-b border-default sm:table-header-group">
            <Sorting></Sorting>
          </thead>
          <tbody className="max-sm:flex max-sm:flex-col max-sm:gap-6 max-sm:mt-2">
            {paginatedData.map((coin, index) => (
              <TableItem
                key={index}
                image={coin.image}
                symbol={coin.symbol}
                name={coin.name}
                price={coin.current_price}
                change={coin.price_change_percentage_24h}
                marketCap={coin.market_cap}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between pt-12 max-sm:flex-col max-sm:gap-8">
        <RowsPerPage></RowsPerPage>
        <Pagination></Pagination>
      </div>
    </div>
  )
}

export default Table
