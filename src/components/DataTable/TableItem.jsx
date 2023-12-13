import changeClass from '~/helpers/changeClass'
import slicedPercentage from '~/helpers/slicedPercentage'
import AssetColumn from '~/components/DataTable/ui/AssetColumn'

function TableItem({ image, symbol, name, price, change, marketCap }) {
  // Generate new value and class for change
  const slicedChange = slicedPercentage(change)
  const changeColor = changeClass(change)

  return (
    <tr className="table-item">
      <td className="table-item-col text-left">
        <AssetColumn image={image} name={name} symbol={symbol} />
      </td>
      <td className="table-item-col text-left" data-label="Current Price">
        ${price}
      </td>
      <td
        className={'table-item-col text-left sm:text-right ' + changeColor}
        data-label="24h Change"
      >
        {slicedChange}%
      </td>
      <td
        className="table-item-col text-left sm:text-right"
        data-label="Market Cap"
      >
        ${marketCap}
      </td>
    </tr>
  )
}

export default TableItem
