function AssetColumn({ image, name, symbol }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={image}
        className="h-8 w-auto drop-shadow-[0px_0px_1px_#ffffff70]"
        alt={name + ' coin icon.'}
      />
      <div className="flex gap-2">
        <span className="max-sm:text-xl max-sm:font-semibold">{name}</span>
        <span className="opacity-50 max-sm:hidden">|</span>
        <span className="opacity-50 max-sm:hidden">{symbol.toUpperCase()}</span>
      </div>
    </div>
  )
}

export default AssetColumn
