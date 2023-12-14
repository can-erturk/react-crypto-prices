import getPrices from '~/services/getPrices'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  prices: [],
}

export const setPricesThunk = createAsyncThunk('prices/setPrices', async () => {
  return await getPrices()
})

const prices = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setPricesThunk.pending, (state) => {
      state.loading = true
    })

    builder.addCase(setPricesThunk.fulfilled, (state, action) => {
      state.prices = action.payload
      state.loading = false
    })
  },
})

export const { setPrices } = prices.actions
export default prices.reducer
