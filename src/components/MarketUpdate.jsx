import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setPricesThunk } from "~/stores/prices"
import Table from "~/components/DataTable/Table"
import SectionTitle from "~/components/ui/SectionTitle"
import SectionVideo from "~/components/ui/SectionVideo"

function MarketUpdate() {

  const dispatch = useDispatch()

  // Get prices from API and set them to the store
  useEffect(() => {
    dispatch(setPricesThunk())
  }, [dispatch])

  return (
    <section id="market-update" className="border-none py-0">
      <div className="container overflow-hidden rounded-3xl py-28 max-sm:py-24 pb-44 border-none border-default relative">
        <SectionVideo src="/videos/react.mp4" />

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
