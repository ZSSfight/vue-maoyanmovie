import axios from 'axios'
const zsshttp = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000,
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16188396904930261678555137","bc":"310100"}',
    'X-Host': 'mall.film-ticket.film.list'
  }
})
export default zsshttp
