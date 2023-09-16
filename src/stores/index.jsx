import { configureStore } from "@reduxjs/toolkit"
import priceReducer from "./prices"
import tableReducer from "./table"
import layoutReducer from "./layout"

const store = configureStore({
  reducer: {
    crypto: priceReducer,
    table: tableReducer,
    layout: layoutReducer
  },
})

export default store
