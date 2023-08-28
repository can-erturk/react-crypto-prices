import { configureStore } from "@reduxjs/toolkit"
import priceReducer from "./prices"

const store = configureStore({
  reducer: {
    crypto: priceReducer,
  },
})

export default store
