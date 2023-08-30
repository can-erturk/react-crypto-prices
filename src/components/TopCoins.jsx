import { useSelector } from "react-redux"
import TopCoinItem from "~/components/ui/TopCoinItem"

function TopCoins() {

  const prices = useSelector((state) => state.crypto.prices)
  const topCoins = prices.slice(0, 4)
  
  return (
    <div className="container grid grid-cols-12 gap-6 py-14 max-sm:grid-cols-6 max-[340px]:grid-cols-3">
      {topCoins.map((coin, index) => (
        <TopCoinItem 
          key={index}
          name={coin.name}
          image={coin.image}
          price={coin.current_price}
          change={coin.price_change_percentage_24h}
        />
      ))}
    </div>
  )
}

export default TopCoins
