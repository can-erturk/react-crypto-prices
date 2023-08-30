import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPrices } from "~/stores/prices"
import getPrices from "~/services/getPrices"

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
    <>Market Update</>
  )
}

export default MarketUpdate
