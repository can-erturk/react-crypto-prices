import Header from '~/components/Header'
import Hero from '~/components/Hero'
import TopCoins from '~/components/TopCoins'
import MarketUpdate from '~/components/MarketUpdate'
import Footer from '~/components/Footer'
import Sidebar from '~/components/Sidebar'
import WhyUs from './components/WhyUs'
import DownloadNow from '~/components/DownloadNow'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <Hero></Hero>
      <TopCoins></TopCoins>
      <MarketUpdate></MarketUpdate>
      <WhyUs></WhyUs>
      <DownloadNow></DownloadNow>
      <Footer></Footer>

      <ToastContainer
        hideProgressBar={true}
        newestOnTop
        theme="dark"
        position="top-right"
      />
    </>
  )
}

export default App
