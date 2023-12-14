import Header from '~/components/layout/Header'
import Footer from '~/components/layout/Footer'
import Sidebar from '~/components/layout/Sidebar'
import Hero from '~/components/sections/Hero'
import TopCoins from '~/components/sections/TopCoins'
import MarketUpdate from '~/components/sections/MarketUpdate'
import WhyUs from './components/sections/WhyUs'
import DownloadNow from '~/components/sections/DownloadNow'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Hero />
      <TopCoins />
      <MarketUpdate />
      <WhyUs />
      <DownloadNow />
      <Footer />

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
