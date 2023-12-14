import { useSelector } from 'react-redux'
import TableItem from '~/components/DataTable/TableItem'
import Pagination from '~/components/DataTable/Pagination'
import Sorting from '~/components/DataTable/Sorting'
import RowsPerPage from '~/components/DataTable/RowsPerPage'
import Preloader from '~/components/ui/Preloader'

function Table() {
  // Get states
  const { paginatedData } = useSelector((state) => state.table)
  const { loading } = useSelector((state) => state.crypto)

  return (
    <div id="marketUpdate">
      <div className="bg-primary sm:border sm:border-default sm:rounded-3xl sm:overflow-hidden shadow-[0px_0px_120px_60px_black]">
        <table className="w-full striped">
          <thead className="hidden border-b border-default sm:table-header-group">
            <Sorting />
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

        {/* Show preloader if data pending */}
        {loading && (
          <div className="h-80 w-full flex items-center justify-center">
            <Preloader />
          </div>
        )}
      </div>
      <div className="flex items-center justify-between pt-12 max-sm:flex-col max-sm:gap-8">
        <RowsPerPage />
        <Pagination />
      </div>
    </div>
  )
}

export default Table
