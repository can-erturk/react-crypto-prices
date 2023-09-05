import { configureStore } from "@reduxjs/toolkit"
import priceReducer from "./prices"
import tableReducer from "./table"

const store = configureStore({
  reducer: {
    crypto: priceReducer,
    table: tableReducer
  },
})

export default store
