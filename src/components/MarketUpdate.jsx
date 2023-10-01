import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setPricesThunk } from "~/stores/prices"
import Table from "~/components/DataTable/Table"
import SectionTitle from "~/components/ui/SectionTitle"

function MarketUpdate() {

  const dispatch = useDispatch()

  // Get prices from API and set them to the store
  useEffect(() => {
    dispatch(setPricesThunk())
  }, [dispatch])

  return (
    <section id="market-update">
      <div className="container">

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
