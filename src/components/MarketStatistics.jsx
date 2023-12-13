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
    <section className="bg-primary py-0 border-none">
      <div className="container py-0">

        <div className="grid grid-cols-12 max-lg:grid-cols-6 max-sm:grid-cols-3 rounded-3xl border border-default py-6">
          {statisticItems.map((item, index) => (
            <div key={index} className="statistic-item">
              <div className="text-2xl font-semibold max-sm:text-2xl gradient-text">{item.value}</div>
              <div className="text-lg opacity-50 max-sm:text-base">{item.title}</div>
            </div>
          ))}

          <div className="col-span-3 sm:border-l sm:border-default flex items-center justify-center max-sm:mt-12">
            <a href="https://tradingview.com" target="_blank" className="text-center text-xl max-sm:text-lg opacity-70 font-medium max-w-[150px]">See More on Tradingview</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketStatistics
