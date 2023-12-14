import changeClass from '~/helpers/changeClass'
import slicedPercentage from '~/helpers/slicedPercentage'

function TopCoinItem({ name, image, price, change }) {
  // Generate new value and class for change
  const slicedChange = slicedPercentage(change)
  const changeColor = changeClass(change)

  return (
    <div className="bg-primary col-span-4 border border-default rounded-3xl p-6 pr-2 flex items-center gap-6 overflow-hidden">
      <img src={image} className="w-10 h-10" />
      <div className="flex flex-col">
        <div className="font-normal text-xl max-sm:text-lg line-clamp-1">
          {name}
        </div>
        <div className="flex flex-wrap gap-2 mt-1">
          <span>${price}</span>
          <span className={changeColor}>{slicedChange}%</span>
        </div>
      </div>
    </div>
  )
}

export default TopCoinItem
