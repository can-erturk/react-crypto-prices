import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentPage: 1,
  sortConfig: { key: "market_cap", direction: 'desceding' },
  sortedData: [],
  paginatedData: [],
}

const table = createSlice({
  name: "table",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setSortConfig: (state, action) => {
      state.sortConfig = action.payload
    },
    setSortedData: (state, action) => {
      state.sortedData = action.payload
    },
    setPaginatedData: (state, action) => {
      state.paginatedData = action.payload
    },
  },
})

export const { setCurrentPage } = table.actions
export const { setSortConfig } = table.actions
export const { setSortedData } = table.actions
export const { setPaginatedData } = table.actions
export default table.reducer
