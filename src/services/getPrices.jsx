import axios from "axios"
import showToast from "~/helpers/showToast"

const baseURL = "https://api.coingecko.com/api/v3"
const api = axios.create({ baseURL })

// A variable used to show error message only once
let apiErrorShown = false

// Error handling function
function handleError(error) {
  if (!apiErrorShown) {
    showToast.apiError()
    apiErrorShown = true
  }
  throw error
}

// First request to API
async function firstApiRequest(endPoint) {
  try {
    const response = await api.get(endPoint)
    return response.data
  } catch (error) {
    return handleError(error)
  }
}

// Second request to Mock data
async function secondApiRequest() {
  try {
    const response = await axios.get('/data.json')
    return response.data
  } catch (error) {
    return handleError(error)
  }
}

// Main function that manages API requests
async function getPrices(endPoint) {
  try {
    return await firstApiRequest(endPoint)
  } catch (error) {
    // If the first API request failed
    return await secondApiRequest()
  }
}

export default getPrices