function TopCoinItem({ name, image, price, change }) {

  let slicedChange = change.toString()

  if (slicedChange.startsWith('-')) {
    slicedChange = slicedChange.substr(0, 5)
  } else {
    slicedChange = slicedChange.substr(0, 4)
  }

  return (
    <div className="col-span-3 flex flex-col items-center">
      <img src={image} className="w-24" />
        <div className="font-semibold text-2xl mt-4">{name}</div>
        <div className="flex gap-2 mt-2">
          <span className="font-normal text-lg">${price}</span>
          <span className="font-normal text-lg">{slicedChange}%</span>
        </div>
    </div>
  )
}

export default TopCoinItem
