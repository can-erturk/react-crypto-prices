function Hero() {
  return (
    <div className="h-[700px] max-lg:h-[400px] max-sm:h-[250px] pt-28 max-sm:pt-20">
      <div className="container h-full relative flex flex-wrap items-center justify-between overflow-hidden">
        <div className="sm:w-2/3 text-center m-auto">
          <h1 className="text-7xl flex-grow font-medium max-lg:text-4xl max-sm:text-xl">
            Today&apos;s Cryptocurrency Prices
          </h1>
          <span className="text-gray-400 text-2xl block mt-3 max-lg:text-lg max-sm:text-sm">
            The global market cap is <b className="font-semibold">$1.02T</b>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Hero