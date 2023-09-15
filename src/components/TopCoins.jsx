import { useSelector } from "react-redux"
import TopCoinItem from "~/components/ui/TopCoinItem"

function TopCoins() {

  // Get prices state from the crypto store
  const { prices } = useSelector(state => state.crypto)

  // Use only first 4 value of prices data
  const topCoins = prices.slice(0, 4)
  
  return (
    <div className="container py-14 overflow-hidden">
      <h2 className="text-4xl font-semibold">Top Coins</h2>
      <div className="grid grid-cols-12 gap-6 mt-6 max-lg:grid-cols-6 max-sm:grid-cols-3">
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
    </div>
  )
}

export default TopCoins
