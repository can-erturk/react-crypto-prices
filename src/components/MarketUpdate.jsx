import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPrices } from "~/stores/prices"
import getPrices from "~/services/getPrices"
import Table from "~/components/DataTable/Table"

function MarketUpdate() {

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const prices = await getPrices("/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100")
      dispatch(setPrices(prices))
    }

    fetchData()
  }, [dispatch])

  return (
    <div className="container pt-12 pb-16">
      <h2 className="text-4xl font-semibold">Market Update</h2>
      <Table />
    </div>
  )
}

export default MarketUpdate
