import { useSelector } from "react-redux"
import TopCoinItem from "~/components/ui/TopCoinItem"

function TopCoins() {

  // Get prices state from the crypto store
  const { prices } = useSelector(state => state.crypto)

  // Copy data for sorting
  const sortedPrices = [...prices]

  // Sort prices by change in descending
  sortedPrices.sort((a, b) => {
    return b.price_change_percentage_24h - a.price_change_percentage_24h
  })

  // Use only first 4 value of sorted data
  const topCoins = sortedPrices.slice(0, 4)

  return (
    <section className="bg-secondary">
      <div className="container overflow-hidden">
        <h2 className="text-5xl font-normal text-center mb-6">Top Gainers</h2>
        <p className="text-center max-w-xl m-auto mb-14 text-lg opacity-50">Below, you can see a list of a few of the most profitable cryptocurrency assets.</p>
        <div className="grid grid-cols-12 gap-6 max-lg:grid-cols-6 max-sm:grid-cols-3">
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
    </section>
  )
}

export default TopCoins
