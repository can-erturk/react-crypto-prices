import { useSelector } from "react-redux"
import TableItem from "~/components/DataTable/TableItem"
import Pagination from "~/components/DataTable/Pagination"

function Table() {

  const paginatedData = useSelector(state => state.table.paginatedData)

  return (
    <div>
      <table className="w-full striped mt-6">
        <thead className="hidden border-b border-b-zinc-800 sm:table-header-group">
          <tr>
            <th className="table-title sm:pl-6">Asset</th>
            <th className="table-title">Current Price</th>
            <th className="table-title sm:text-right sm:pr-6">24h %</th>
            <th className="table-title sm:text-right sm:pr-6">Market Cap</th>
          </tr>
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
      <Pagination></Pagination>
    </div>
  )
}

export default Table
