import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  sidebarOpen: false,
}

const layout = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleSidebar: state => {
      state.sidebarOpen = !state.sidebarOpen
    }
  },
})

export const { toggleSidebar } = layout.actions
export default layout.reducer
