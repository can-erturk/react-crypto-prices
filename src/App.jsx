import Header from "~/components/Header"
import Hero from "~/components/Hero"
import TopCoins from "~/components/TopCoins"
import MarketUpdate from "~/components/MarketUpdate"
import Footer from "~/components/Footer"
import Sidebar from "~/components/Sidebar"
import MarketStatistics from "~/components/MarketStatistics"

function App() {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <Hero></Hero>
      <TopCoins></TopCoins>
      <MarketUpdate></MarketUpdate>
      <MarketStatistics></MarketStatistics>
      <Footer></Footer>
    </>
  )
}

export default App
