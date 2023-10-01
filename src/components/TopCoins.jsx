import { useSelector } from "react-redux"
import TopCoinItem from "~/components/ui/TopCoinItem"
import SectionTitle from "~/components/ui/SectionTitle"
import Preloader from "~/components/ui/Preloader"

function TopCoins() {

  // Get prices state from the crypto store
  const { prices } = useSelector(state => state.crypto)
  const { loading } = useSelector(state => state.crypto)

  // Copy data for sorting
  const sortedPrices = [...prices]

  // Sort prices by change in descending
  sortedPrices.sort((a, b) => {
    return b.price_change_percentage_24h - a.price_change_percentage_24h
  })

  // Use only first 4 value of sorted data
  const topCoins = sortedPrices.slice(0, 4)

  return (
    <section className="bg-secondary" id="top-coins">
      <div className="container overflow-hidden">
        
        <SectionTitle 
          title="Top Gainers"  
          description="Below, you can see a list of a few of the most profitable cryptocurrency assets."
        />

        <div className="grid grid-cols-12 gap-6 max-lg:grid-cols-6 max-sm:grid-cols-3">

          {/* Show preloader if data pending */}
          {loading && (
            <div className="col-span-12 flex items-center justify-center mt-8">
              <Preloader />
            </div>
          )}

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
