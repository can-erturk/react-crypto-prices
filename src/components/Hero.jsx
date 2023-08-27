function Hero() {
  return (
    <div className="bg-secondary h-[700px] max-lg:h-[400px] max-sm:h-[250px] pt-20 max-sm:pt-14">
      <div className="container h-full relative flex flex-wrap items-center justify-between overflow-hidden">
        <div className="w-1/2 min-w-min flex-shrink-0 max-lg:text-center max-lg:w-full">
          <h1 className="text-7xl flex-grow font-medium max-lg:text-4xl max-sm:text-xl">
            Today&apos;s Cryptocurrency Prices
          </h1>
          <span className="text-gray-400 text-2xl block mt-3 max-lg:text-lg max-sm:text-sm">
            The global market cap is <b className="font-semibold">$1.86T</b>
          </span>
        </div>
        <div className="w-2/5 h-full flex justify-center items-end max-lg:hidden">
          <img src="/hero-image.png" className="h-[500px] w-auto" />
        </div>
      </div>
    </div>
  )
}

export default Hero