import changeClass from '~/helpers/changeClass'
import slicedPercentage from '~/helpers/slicedPercentage'

function TopCoinItem({ name, image, price, change }) {
  // Generate new value and class for change
  const slicedChange = slicedPercentage(change)
  const changeColor = changeClass(change)

  return (
    <div className="bg-primary col-span-4 border border-default rounded-3xl p-8 pr-2 flex items-center gap-6 overflow-hidden">
      <img src={image} className="w-12 h-12" />
      <div className="flex flex-col">
        <div className="font-semibold text-2xl max-sm:text-lg line-clamp-1">
          {name}
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <span>${price}</span>
          <span className={changeColor}>{slicedChange}%</span>
        </div>
      </div>
    </div>
  )
}

export default TopCoinItem
