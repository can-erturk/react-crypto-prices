import axios from "axios"

const baseURL = "https://api.coingecko.com/api/v3"
const api = axios.create({ baseURL })

async function getPrices(endPoint) {
  try {
    const response = await api.get(endPoint)
    return response.data
  } catch (error) {
    throw error
  }
}

export default getPrices