import axios from "axios"

const baseURL = "https://api.coingecko.com/api/v3"
const api = axios.create({ baseURL })

async function getPrices() {
  const response = await api.get("/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100")
  return response.data
}

export default getPrices