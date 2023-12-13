import { FaAngleRight } from "react-icons/fa"
import HeroBg from "~/components/ui/HeroBg"

function Hero() {
  return (
    <div className="h-[750px] max-lg:h-[550px] max-sm:h-[90dvh] pt-28 max-sm:pt-20 pb-28 max-lg:pb-16 max-sm:pb-10 relative overflow-hidden">
      <HeroBg />

      <div className="container h-full relative flex flex-wrap items-center justify-between overflow-hidden">
        <div className="lg:w-2/3 text-center m-auto">
          <h1 className="flex-grow font-medium">
            Today&apos;s Cryptocurrency Prices
          </h1>
          <span className="text-gray-400 text-2xl block mt-4 max-lg:text-lg max-sm:text-base">
            The global market cap is <b className="font-semibold">$1.02T</b>
          </span>
          <a href="#market-update" className="hero-btn">
            <span>Take a Look</span>
            <FaAngleRight className="ml-2 -mr-2 mt-[1px]" size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero