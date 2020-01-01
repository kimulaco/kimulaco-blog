import axios from 'axios'
import dotenv from 'dotenv'

if (!process.env.CMS_BASE_URL || !process.env.CMS_API_KEY) {
  dotenv.config()
}

const cms = axios.create({
  baseURL: `${process.env.CMS_BASE_URL}/api/v1`,
  headers: {
    'X-API-KEY': process.env.CMS_API_KEY
  }
})

export default cms
