import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setCurrentPage, setPaginatedData } from "~/stores/table"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6"

function Pagination() {
  const dispatch = useDispatch()

  // Get states from the table store
  const { sortedData, currentPage, itemsPerPage } = useSelector(state => state.table)

  // Default constants
  const totalPages = Math.ceil(sortedData.length / itemsPerPage)
  const marketUpdate = document.getElementById('marketUpdate')

  // Update paginated data
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedData = sortedData.slice(startIndex, endIndex)

    dispatch(setPaginatedData(paginatedData))
  }, [dispatch, sortedData, currentPage, itemsPerPage])

  // Helper function to scroll to top the market update section
  const scrollToMarketUpdate = () => {
    window.scrollTo({
      top: marketUpdate.offsetTop - 80,
      behavior: "smooth",
    })
  }

  // Helper function to set the page
  const setPage = (page) => {
    // Set the new page
    dispatch(setCurrentPage(page))

    // Scroll to top the market update section
    scrollToMarketUpdate()
  }

  // Go to the previous page
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1)
    }
  }

  // Go to the next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setPage(currentPage + 1)
    }
  }

  // Create disabled attributes for buttons
  const disabledButtons = {
    prev: currentPage != 1 ? false : true,
    next: totalPages != currentPage ? false : true
  }

  // Default variables for pagination buttons
  const paginationButtons = []
  const maxButtonsToShow = 5
  let startPage = 1
  let endPage = totalPages

  // Set the buttons to be displayed
  if (totalPages > maxButtonsToShow) {
    const halfButtons = Math.floor(maxButtonsToShow / 2)

    if (currentPage <= halfButtons + 1) {
      endPage = maxButtonsToShow
    } else if (currentPage >= totalPages - halfButtons) {
      startPage = totalPages - maxButtonsToShow + 1
    } else {
      startPage = currentPage - halfButtons
      endPage = currentPage + halfButtons
    }
  }

  // Generate the buttons to be displayed
  for (let page = startPage; page <= endPage; page++) {
    const isActive = currentPage === page ? "active" : ""

    paginationButtons.push({ page, isActive })
  }

  return (
    <div className="select-none flex justify-center gap-2 order-2 max-sm:order-1">
      <button className="pagination-prev-btn" disabled={disabledButtons.prev} onClick={goToPrevPage}>
        <FaAngleLeft />
      </button>
      <div className="flex gap-1 flex-wrap justify-center">
        {paginationButtons.map(button => (
          <button key={button.page} onClick={() => setPage(button.page)} className={button.isActive + " pagination-btn"}>
            {button.page}
          </button>
        ))}
      </div>
      <button className="pagination-next-btn" disabled={disabledButtons.next} onClick={goToNextPage}>
        <FaAngleRight />
      </button>
    </div>
  )
}

export default Pagination
