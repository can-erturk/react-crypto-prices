function Hero() {
  return (
    <div className="h-[700px] max-lg:h-[550px] max-sm:h-[90dvh] pt-28 max-sm:pt-20 pb-20 max-lg:pb-16 max-sm:pb-10 border-b border-default">
      <div className="container h-full relative flex flex-wrap items-center justify-between overflow-hidden">
        <div className="lg:w-2/3 text-center m-auto">
          <h1 className="flex-grow font-medium">
            Today&apos;s Cryptocurrency Prices
          </h1>
          <span className="text-gray-400 text-2xl block mt-3 max-lg:text-lg max-sm:text-sm">
            The global market cap is <b className="font-semibold">$1.02T</b>
          </span>
          <a href="#market-update" className="hero-btn">Take a Look</a>
        </div>
      </div>
    </div>
  )
}

export default Hero