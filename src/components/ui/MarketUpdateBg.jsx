function MarketUpdateBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none -z-20">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.075)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,.075)_1px,transparent_1px)] bg-[length:100px_100px] -z-50"></div>
      <div className="absolute inset-0 bg-[linear-gradient(0deg,black,transparent,transparent,black)] -z-40"></div>
    </div>
  )
}

export default MarketUpdateBg
