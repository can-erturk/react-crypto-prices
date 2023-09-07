import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setCurrentPage, setPaginatedData } from "~/stores/table"

function Pagination() {

  const dispatch = useDispatch()
  
  const sortedData = useSelector(state => state.table.sortedData)
  const currentPage = useSelector(state => state.table.currentPage)
  const itemsPerPage = 10

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedData = sortedData.slice(startIndex, endIndex)

    dispatch(setPaginatedData(paginatedData))
  }, [dispatch, sortedData, currentPage])


  const goToPrevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1))
    }
  }

  const goToNextPage = () => {
    if (currentPage < Math.ceil(sortedData.length / itemsPerPage)) {
      dispatch(setCurrentPage(currentPage + 1))
    }
  }

  return (
    <div>
      <button className="px-5 py-3 m-3 bg-gray-700" onClick={goToPrevPage}>Prev</button>
      <button className="px-5 py-3 m-3 bg-gray-700" onClick={goToNextPage}>Next</button>
    </div>
  )
}

export default Pagination
