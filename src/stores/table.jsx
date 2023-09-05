import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentPage: 1,
}

const table = createSlice({
  name: "table",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
  },
})

export const { setCurrentPage } = table.actions
export default table.reducer
