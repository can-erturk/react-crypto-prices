import axios from 'axios'

async function getMockPrices() {
  const response = await axios.get('/data.json')
  return response.data
}

export default getMockPrices
