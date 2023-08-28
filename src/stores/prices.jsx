import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  prices: [],
}

const prices = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    setPrices: (state, action) => {
      state.prices = action.payload
    },
  },
})

export const { setPrices } = prices.actions
export default prices.reducer
