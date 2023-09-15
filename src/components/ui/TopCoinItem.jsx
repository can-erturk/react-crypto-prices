import changeClass from "~/helpers/changeClass"
import slicedPercentage from "~/helpers/slicedPercentage"

function TopCoinItem({ name, image, price, change }) {

  // Generate new value and class for change
  const slicedChange = slicedPercentage(change)
  const changeColor = changeClass(change)

  return (
    <div className="col-span-3 bg-secondary rounded-lg shadow-xl py-8 pl-6 pr-2 flex items-center gap-4 overflow-hidden">
      <img src={image} className="w-14 h-14" />
      <div className="flex flex-col">
        <div className="font-semibold text-2xl">{name}</div>
        <div className="flex flex-wrap gap-2 mt-2">
          <span>${price}</span>
          <span className={changeColor}>{slicedChange}%</span>
        </div>
      </div>
    </div>
  )
}

export default TopCoinItem
