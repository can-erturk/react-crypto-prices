function MarketStatistics() {

  const statisticItems = [
    {
      title: "Global Market Cap",
      value: "$1.02T"
    },
    {
      title: "BTC Dominance",
      value: "50.13%"
    },
    {
      title: "Total Currencies",
      value: "23k+"
    }
  ]

  return (
    <section className="bg-secondary py-8">
      <div className="container grid grid-cols-12 max-lg:grid-cols-6 max-sm:grid-cols-3">
      
        {statisticItems.map((item, index) => (
          <div key={index} className="statistic-item">
            <div className="text-4xl font-semibold">{item.value}</div>
            <div className="text-lg opacity-50 ">{item.title}</div>
          </div>
        ))}

        <div className="col-span-3 sm:border-l sm:border-default flex items-center justify-center max-sm:mt-12">
          <a href="https://tradingview.com" target="_blank" className="text-center text-2xl font-medium max-w-[150px]">See More on Tradingview</a>
        </div>
      </div>
    </section>
  )
}

export default MarketStatistics
