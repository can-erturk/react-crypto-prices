import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 1,
  sortConfig: { key: 'market_cap', direction: 'desceding' },
  sortedData: [],
  paginatedData: [],
  itemsPerPage: 10,
}

const table = createSlice({
  name: 'table',
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
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload
    },
  },
})

export const {
  setCurrentPage,
  setSortConfig,
  setSortedData,
  setPaginatedData,
  setItemsPerPage,
} = table.actions

export default table.reducer
