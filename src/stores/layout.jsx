import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  sidebarOpen: false,
}

const layout = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    openSidebar: state => {
      state.sidebarOpen = true
    },
    closeSidebar: state => {
      state.sidebarOpen = false
    },
  },
})

export const { openSidebar, closeSidebar } = layout.actions
export default layout.reducer
