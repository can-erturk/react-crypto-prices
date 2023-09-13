function RowsPerPage() {
  return (
    <div className="flex gap-4 items-center order-1 max-sm:order-2">
      <label className="flex-shrink-0 text-sm font-medium">Rows Per Page:</label>
      <select className="rows-select" defaultValue={10}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
      </select>
    </div>
  )
}

export default RowsPerPage
