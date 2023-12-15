import axios from 'axios'
import showToast from '~/helpers/showToast'

const baseURL = 'https://api.coingecko.com/api/v3'
const api = axios.create({ baseURL })
const apiKey = import.meta.env.VITE_APP_API_KEY
const endpoint = apiKey
  ? `/coins/markets?x_cg_demo_api_key=${apiKey}&vs_currency=usd&order=market_cap_desc&per_page=100`
  : '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100'

async function getMockPrices() {
  try {
    const response = await axios.get('/data.json')
    return response.data
  } catch (error) {
    showToast.axiosError()
    throw new Error(error)
  }
}

async function getPrices() {
  try {
    const response = await api.get(endpoint)
    return response.data
  } catch (error) {
    showToast.apiError()
    return getMockPrices()
  }
}

export default getPrices
