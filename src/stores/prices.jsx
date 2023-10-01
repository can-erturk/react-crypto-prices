import getPrices from "~/services/getPrices"
import getMockPrices from "~/services/getMockPrices"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import showToast from "~/helpers/showToast"

const initialState = {
  prices: [],
}

export const setPricesThunk = createAsyncThunk("prices/setPrices", async () => {
  // Try to get data from API
  try {
    const response = await getPrices()
    return response
  } catch (error) { // If API fails

    // Try to get mock data
    try {
      const response = await getMockPrices()
      showToast.apiError()

      // Return mock data
      return response

    } catch (error) { // If mock data fails
      showToast.axiosError()
    }

    // If both API and mock data fail
    throw error
  }
})

const prices = createSlice({
  name: "crypto",
  initialState,
  reducers: {},
  extraReducers: builder => {

    builder.addCase(setPricesThunk.fulfilled, (state, action) => {
      state.prices = action.payload
    })
  },
})

export const { setPrices } = prices.actions
export default prices.reducer
