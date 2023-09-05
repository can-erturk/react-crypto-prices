import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentPage: 1,
  paginatedData: [],
}

const table = createSlice({
  name: "table",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setPaginatedData: (state, action) => {
      state.paginatedData = action.payload
    },
  },
})

export const { setCurrentPage } = table.actions
export const { setPaginatedData } = table.actions
export default table.reducer
