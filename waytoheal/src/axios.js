import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:8000'
  baseURL: 'https://good-cyan-cricket-vest.cyclic.app'
})

export default instance
