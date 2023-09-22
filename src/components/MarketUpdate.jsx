import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setPrices } from "~/stores/prices"
import getPrices from "~/services/getPrices"
import Table from "~/components/DataTable/Table"
import SectionTitle from "~/components/ui/SectionTitle"

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
    <section>
      <div className="container" id="marketUpdate">

        <SectionTitle
          title="Market Update"
          description="You can check out the latest data related to the cryptocurrency market in the list below."
        />

        <Table />

      </div>
    </section>
  )
}

export default MarketUpdate
