function AssetColumn({ image, name, symbol }) {
  return (
    <div className="flex items-center gap-3">
      <img src={image} className="h-8 w-auto" />
      <div className="flex gap-2">
        <span className="max-sm:text-xl max-sm:font-semibold">{name}</span>
        <span className="opacity-50 max-sm:hidden">|</span>
        <span className="opacity-50 max-sm:hidden">{symbol.toUpperCase()}</span>
      </div>
    </div>
  )
}

export default AssetColumn
