import TopCoinItem from "~/components/ui/TopCoinItem"

function TopCoins() {
  return (
    <div className="container grid grid-cols-12 gap-6 py-8 max-sm:grid-cols-6 max-[340px]:grid-cols-3">
      <TopCoinItem></TopCoinItem>
      <TopCoinItem></TopCoinItem>
      <TopCoinItem></TopCoinItem>
      <TopCoinItem></TopCoinItem>
    </div>
  )
}

export default TopCoins
